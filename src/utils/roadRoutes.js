const ROUTE_SAMPLE_POINTS = 32

export const toLonLat = (coordinates) => `${coordinates[1]},${coordinates[0]}`

export const interpolateCoordinates = (origin, destination, progress) => {
  const safeProgress = Math.max(0, Math.min(1, progress))

  return [
    origin[0] + (destination[0] - origin[0]) * safeProgress,
    origin[1] + (destination[1] - origin[1]) * safeProgress,
  ]
}

export const getSegmentDistance = (pointA, pointB) => {
  const latDiff = pointB[0] - pointA[0]
  const lngDiff = pointB[1] - pointA[1]
  return Math.sqrt((latDiff * latDiff) + (lngDiff * lngDiff))
}

export const getPathPointAndNextIndex = (path, progress) => {
  if (!path || path.length === 0) {
    return { point: null, nextIndex: 0 }
  }

  if (path.length === 1) {
    return { point: path[0], nextIndex: 0 }
  }

  const safeProgress = Math.max(0, Math.min(1, progress))
  const segmentDistances = []
  let totalDistance = 0

  for (let index = 0; index < path.length - 1; index += 1) {
    const segmentDistance = getSegmentDistance(path[index], path[index + 1])
    segmentDistances.push(segmentDistance)
    totalDistance += segmentDistance
  }

  if (totalDistance <= 0) {
    return { point: path[path.length - 1], nextIndex: path.length - 1 }
  }

  const targetDistance = totalDistance * safeProgress
  let traversedDistance = 0

  for (let index = 0; index < segmentDistances.length; index += 1) {
    const segmentDistance = segmentDistances[index]
    const nextDistance = traversedDistance + segmentDistance

    if (targetDistance <= nextDistance) {
      const segmentProgress = segmentDistance === 0 ? 1 : (targetDistance - traversedDistance) / segmentDistance
      return {
        point: interpolateCoordinates(path[index], path[index + 1], segmentProgress),
        nextIndex: index + 1,
      }
    }

    traversedDistance = nextDistance
  }

  return {
    point: path[path.length - 1],
    nextIndex: path.length - 1,
  }
}

export const buildFallbackRoutePath = (origin, destination, points = ROUTE_SAMPLE_POINTS) => Array.from(
  { length: points + 1 },
  (_, index) => {
    const progress = index / points
    return interpolateCoordinates(origin, destination, progress)
  },
)

export const fetchRoadRoute = async (origin, destination) => {
  const response = await fetch(
    `https://router.project-osrm.org/route/v1/driving/${toLonLat(origin)};${toLonLat(destination)}?overview=full&geometries=geojson`,
  )

  if (!response.ok) {
    throw new Error('Route service unavailable')
  }

  const payload = await response.json()
  const geometry = payload?.routes?.[0]?.geometry?.coordinates
  const durationSeconds = payload?.routes?.[0]?.duration
  const points = Array.isArray(geometry)
    ? geometry.map(([lon, lat]) => [lat, lon])
    : null

  if (!points || points.length < 2) {
    return null
  }

  return {
    points,
    durationSeconds: typeof durationSeconds === 'number' ? durationSeconds : null,
  }
}
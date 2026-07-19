import React from 'react'

const ResponderDashboard = () => {
  const workload = [
    { label: 'Assigned Incidents', value: 12 },
    { label: 'Completed Missions Today', value: 9 },
    { label: 'Pending Assignments', value: 3 },
    { label: 'Average Response Time', value: '07m 22s' },
    { label: 'Average Resolution Time', value: '39m 11s' },
  ];

  const teamStatus = [
    { label: 'Team Members Online', value: 37 },
    { label: 'Team Members Offline', value: 6 },
    { label: 'Vehicles Available', value: 14 },
    { label: 'Equipment Status', value: '92% operational' },
    { label: 'Fuel Status', value: '76% average tank' },
  ];

  const navigation = [
    { label: 'Next Incident', value: 'Road Collision • Ring Road 3' },
    { label: 'Estimated Arrival Time', value: '06m 04s' },
    { label: 'Route Optimization', value: 'Alt Route B (−2.1 min)' },
    { label: 'Nearby Backup Units', value: '3 units within 5km' },
  ];

  const safety = [
    { label: 'Officer Down Alerts', value: '1 active', tone: 'bg-red-500/15 text-red-600 dark:text-red-400' },
    { label: 'High-Risk Incidents', value: '5 active', tone: 'bg-orange-500/15 text-orange-600 dark:text-orange-400' },
    { label: 'Active Pursuits', value: '2 active', tone: 'bg-amber-500/15 text-amber-700 dark:text-amber-400' },
    { label: 'Hazard Zones', value: '9 marked areas', tone: 'bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-200' },
  ];

  const routeProgress = [24, 39, 52, 68, 77, 84, 100];
  const routeLegs = ['Dispatch', 'Gate Out', 'Segment A', 'Segment B', 'Segment C', 'Approach', 'Arrival'];

  const mockHazardZones = [
    { code: 'HZ-01', name: 'Apapa Industrial Axis', risk: 'Critical', hazard: 'Fuel Fire Risk', activeIncidents: 5 },
    { code: 'HZ-02', name: 'Lekki-Epe Corridor', risk: 'High', hazard: 'Road Collision Cluster', activeIncidents: 4 },
    { code: 'HZ-03', name: 'Wuse Transit Hub', risk: 'Medium', hazard: 'Crowd Stampede Risk', activeIncidents: 2 },
    { code: 'HZ-04', name: 'Port Harcourt Wharf', risk: 'High', hazard: 'Pipeline Leak Alerts', activeIncidents: 3 },
    { code: 'HZ-05', name: 'Maiduguri Outskirts', risk: 'Critical', hazard: 'Security Escalation', activeIncidents: 6 },
    { code: 'HZ-06', name: 'Ibadan Ring Road', risk: 'Medium', hazard: 'Traffic Pile-up', activeIncidents: 2 },
    { code: 'HZ-07', name: 'Warri Creek Zone', risk: 'High', hazard: 'Flooding', activeIncidents: 3 },
    { code: 'HZ-08', name: 'Jos Market District', risk: 'Low', hazard: 'Crowd Control', activeIncidents: 1 },
    { code: 'HZ-09', name: 'Abeokuta Quarry Belt', risk: 'Medium', hazard: 'Landslide Watch', activeIncidents: 2 },
    { code: 'HZ-10', name: 'Benin Bypass', risk: 'Low', hazard: 'Minor Collision Risk', activeIncidents: 1 },
    { code: 'HZ-11', name: 'Calabar Waterfront', risk: 'Medium', hazard: 'Storm Surge Risk', activeIncidents: 2 },
    { code: 'HZ-12', name: 'Kano CBD', risk: 'High', hazard: 'Public Disturbance', activeIncidents: 4 },
    { code: 'HZ-13', name: 'Enugu Ridge', risk: 'Low', hazard: 'Powerline Hazard', activeIncidents: 1 },
    { code: 'HZ-14', name: 'Kaduna Depot', risk: 'High', hazard: 'Combustible Storage', activeIncidents: 3 },
    { code: 'HZ-15', name: 'Uyo Ring Junction', risk: 'Low', hazard: 'Traffic Density', activeIncidents: 1 },
    { code: 'HZ-16', name: 'Ilorin Flyover Zone', risk: 'Medium', hazard: 'Pursuit Corridor', activeIncidents: 2 },
  ];

  const hazardTone = {
    Critical: 'bg-red-500/75 text-red-100',
    High: 'bg-orange-500/75 text-orange-100',
    Medium: 'bg-amber-500/75 text-amber-100',
    Low: 'bg-emerald/75 text-emerald-100',
  };

  return (
    <section className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {workload.map((item) => (
          <article key={item.label} className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
            <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-900 dark:text-stone-100">{item.value}</h3>
          </article>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Team Status</h3>
          <div className="mt-3 space-y-2">
            {teamStatus.map((item) => (
              <div key={item.label} className="rounded-lg bg-stone-100 px-3 py-2 dark:bg-stone-800/20">
                <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
                <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10 xl:col-span-2">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Navigation</h3>
          <div className="mt-3 grid gap-3 lg:grid-cols-2">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.label} className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 dark:border-stone-700/50 dark:bg-stone-800/20">
                  <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
                  <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex h-full flex-col rounded-xl bg-linear-to-br from-stone-100 to-stone-200 p-3 dark:from-stone-800/60 dark:to-stone-700/60">
              <p className="text-xs font-semibold text-stone-600 dark:text-stone-300">Route Optimization</p>
              <p className="mt-2 text-xs text-stone-500 dark:text-stone-400">ETA confidence: 94%</p>
              <div className="mt-auto h-28">
                <div className="flex h-[calc(100%-1rem)] items-end gap-1 border-b border-stone-300/70 dark:border-stone-600/70">
                  {routeProgress.map((value, index) => (
                    <div key={`${value}-${index}`} className="group relative flex h-full flex-1 items-end justify-center">
                      <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden w-36 -translate-x-1/2 rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 shadow-sm group-hover:block dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
                        <p className="font-semibold">{routeLegs[index]}</p>
                        <p>Completion: {value}%</p>
                        <p>Leg {index + 1} of {routeProgress.length}</p>
                      </div>
                      <div className="w-1.5 rounded-sm bg-emerald/80 dark:bg-light-green/70" style={{ height: `${value}%` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-stone-500 dark:text-stone-300">
                  {routeLegs.map((label) => (
                    <span key={label} className="flex-1 truncate text-center">{label}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
        <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Safety</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {safety.map((item) => (
            <div key={item.label} className={`rounded-lg px-3 py-3 ${item.tone}`}>
              <p className="text-xs">{item.label}</p>
              <p className="mt-1 text-base font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-stone-200 p-3 dark:border-stone-700/50">
          <p className="text-xs text-stone-500 dark:text-stone-400">Hazard Zones Map</p>
          <div className="mt-2 flex items-center gap-3 text-[10px] text-stone-600 dark:text-stone-300">
            <span className="font-semibold">Risk:</span>
            <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-red-500" />Critical</span>
            <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-orange-500" />High</span>
            <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-amber-500" />Medium</span>
            <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-emerald" />Low</span>
          </div>
          <div className="mt-2 grid h-24 grid-cols-8 gap-1">
            {mockHazardZones.map((zone) => (
              <div
                key={zone.code}
                title={`${zone.name} • ${zone.hazard} • ${zone.activeIncidents} active • ${zone.risk}`}
                className={`group relative rounded px-1 py-0.5 ${hazardTone[zone.risk]}`}
              >
                <p className="text-[10px] font-semibold leading-tight">{zone.code}</p>

                <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 hidden w-44 -translate-x-1/2 rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 shadow-sm group-hover:block dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
                  <p className="font-semibold">{zone.name}</p>
                  <p>Hazard: {zone.hazard}</p>
                  <p>Active: {zone.activeIncidents}</p>
                  <p>Risk: {zone.risk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}

export default ResponderDashboard
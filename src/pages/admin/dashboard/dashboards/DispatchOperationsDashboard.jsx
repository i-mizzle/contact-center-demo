import React from 'react'

const DispatchOperationsDashboard = () => {
  const activeDispatch = [
    { label: 'Pending Dispatches', value: 73 },
    { label: 'Units En Route', value: 156 },
    { label: 'Units On Scene', value: 112 },
    { label: 'Units Returning', value: 67 },
    { label: 'Completed Dispatches', value: 896 },
  ];

  const resources = [
    { label: 'Police Units Available', value: 221 },
    { label: 'Ambulances Available', value: 94 },
    { label: 'Fire Trucks Available', value: 58 },
    { label: 'Rescue Teams Available', value: 47 },
    { label: 'Specialized Units Available', value: 36 },
  ];

  const dispatchPerf = [
    { label: 'Average Dispatch Time', value: '02:09' },
    { label: 'Average Arrival Time', value: '08:47' },
    { label: 'Dispatch Success Rate', value: '96.3%' },
    { label: 'Reassigned Incidents', value: '42' },
    { label: 'Resource Utilization', value: '71.4%' },
  ];

  const status = [
    { label: 'New Incidents', value: 164 },
    { label: 'Assigned Incidents', value: 138 },
    { label: 'In Progress', value: 112 },
    { label: 'Awaiting Closure', value: 83 },
    { label: 'Closed Incidents', value: 794 },
  ];

  const nearestUnits = [
    { unit: 'Police Unit P-211', eta: '03m', location: 'Ikeja Axis' },
    { unit: 'Ambulance M-104', eta: '05m', location: 'Wuse II' },
    { unit: 'Fire Truck F-067', eta: '06m', location: 'Trans Amadi' },
    { unit: 'Rescue Team R-019', eta: '08m', location: 'Ring Road' },
  ];

  const congestionLevels = [48, 62, 67, 58, 73, 79, 84, 77, 69, 63, 57, 52];
  const congestionPeriods = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
  const maxCongestion = Math.max(...congestionLevels);

  const mockCoverageLocations = [
    { code: 'LA-IK', name: 'Ikeja, Lagos', unit: 'Police', available: 18, status: 'Strong' },
    { code: 'LA-LK', name: 'Lekki, Lagos', unit: 'Medical', available: 9, status: 'Moderate' },
    { code: 'AB-WS', name: 'Wuse, Abuja', unit: 'Police', available: 12, status: 'Strong' },
    { code: 'AB-MT', name: 'Maitama, Abuja', unit: 'Fire', available: 4, status: 'Moderate' },
    { code: 'RV-PH', name: 'Port Harcourt, Rivers', unit: 'Fire', available: 7, status: 'Low' },
    { code: 'KN-NS', name: 'Nassarawa, Kano', unit: 'Police', available: 10, status: 'Moderate' },
    { code: 'OY-IB', name: 'Ibadan North, Oyo', unit: 'Medical', available: 6, status: 'Low' },
    { code: 'KD-ZR', name: 'Zaria, Kaduna', unit: 'Rescue', available: 5, status: 'Low' },
    { code: 'DE-WR', name: 'Warri, Delta', unit: 'Specialized', available: 4, status: 'Moderate' },
    { code: 'ED-BN', name: 'Benin City, Edo', unit: 'Police', available: 8, status: 'Moderate' },
    { code: 'CR-CA', name: 'Calabar, Cross River', unit: 'Rescue', available: 3, status: 'Low' },
    { code: 'BR-MD', name: 'Maiduguri, Borno', unit: 'Military Aid', available: 11, status: 'Strong' },
    { code: 'OG-AB', name: 'Abeokuta, Ogun', unit: 'Police', available: 7, status: 'Moderate' },
    { code: 'EN-EN', name: 'Enugu North, Enugu', unit: 'Medical', available: 5, status: 'Low' },
    { code: 'AK-UK', name: 'Uyo, Akwa Ibom', unit: 'Rescue', available: 4, status: 'Low' },
    { code: 'PL-JS', name: 'Jos North, Plateau', unit: 'Police', available: 6, status: 'Moderate' },
    { code: 'OS-OS', name: 'Osogbo, Osun', unit: 'Fire', available: 3, status: 'Low' },
    { code: 'AN-AK', name: 'Awka, Anambra', unit: 'Medical', available: 5, status: 'Low' },
    { code: 'KT-KT', name: 'Katsina, Katsina', unit: 'Police', available: 9, status: 'Moderate' },
    { code: 'BY-YN', name: 'Yenagoa, Bayelsa', unit: 'Rescue', available: 4, status: 'Low' },
    { code: 'NI-MN', name: 'Minna, Niger', unit: 'Specialized', available: 6, status: 'Moderate' },
    { code: 'BA-BU', name: 'Bauchi, Bauchi', unit: 'Medical', available: 5, status: 'Low' },
    { code: 'KW-IL', name: 'Ilorin, Kwara', unit: 'Police', available: 7, status: 'Moderate' },
    { code: 'IM-OW', name: 'Owerri, Imo', unit: 'Fire', available: 3, status: 'Low' },
  ];

  const coverageTone = {
    Strong: 'bg-emerald/75 text-emerald-100',
    Moderate: 'bg-amber-500/75 text-amber-100',
    Low: 'bg-red-500/75 text-red-100',
  };

  return (
    <section className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {activeDispatch.map((item) => (
          <article key={item.label} className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
            <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-900 dark:text-stone-100">{item.value}</h3>
          </article>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Resource Availability</h3>
          <div className="mt-3 space-y-2">
            {resources.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-lg bg-stone-100 px-3 py-2 dark:bg-stone-800/20">
                <span className="text-xs text-stone-600 dark:text-stone-300">{item.label}</span>
                <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Dispatch Performance</h3>
          <div className="mt-3 space-y-2">
            {dispatchPerf.map((item) => (
              <div key={item.label} className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 dark:border-stone-700/50 dark:bg-stone-800/20">
                <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
                <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Incident Status</h3>
          <div className="mt-3 space-y-2">
            {status.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-lg bg-stone-100 px-3 py-2 dark:bg-stone-800/20">
                <span className="text-xs text-stone-600 dark:text-stone-300">{item.label}</span>
                <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</span>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Nearest Available Units</h3>
          <div className="mt-3 space-y-2">
            {nearestUnits.map((item) => (
              <div key={item.unit} className="rounded-lg bg-stone-100 px-3 py-2 dark:bg-stone-800/20">
                <p className="text-sm font-semibold text-stone-800 dark:text-stone-100">{item.unit}</p>
                <p className="text-xs text-stone-500 dark:text-stone-400">ETA {item.eta} • {item.location}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10 xl:col-span-2">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Geographic Operations</h3>
          <div className="mt-4 grid gap-3 lg:grid-cols-1">
            <div className="rounded-xl bg-stone-100 p-3 dark:bg-stone-800/20">
              <p className="text-xs font-semibold text-stone-600 dark:text-stone-300">Resource Coverage Map</p>
              <div className="mt-2 flex items-center gap-3 text-[10px] text-stone-600 dark:text-stone-300">
                <span className="font-semibold">Coverage:</span>
                <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-emerald" />Strong</span>
                <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-amber-500" />Moderate</span>
                <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-red-500" />Low</span>
              </div>
              <div className="mt-2 grid h-36 grid-cols-6 gap-1.5">
                {mockCoverageLocations.map((location) => (
                  <div
                    key={location.code}
                    title={`${location.name} • ${location.unit} • ${location.available} units • ${location.status} coverage`}
                    className={`group relative rounded-md px-1.5 py-1 ${coverageTone[location.status]}`}
                  >
                    <p className="text-[10px] font-semibold leading-tight">{location.code}</p>
                    <p className="text-[10px] leading-tight">{location.available}</p>

                    <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 hidden w-40 -translate-x-1/2 rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 shadow-sm group-hover:block dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
                      <p className="font-semibold">{location.name}</p>
                      <p>Unit: {location.unit}</p>
                      <p>Available: {location.available}</p>
                      <p>Coverage: {location.status}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="pt-5 text-xs text-stone-600 dark:text-stone-300">Cross-State Deployments: 19 active</p>
            </div>

            <div className="flex h-full flex-col rounded-xl bg-stone-100 p-3 dark:bg-stone-800/20">
              <p className="text-xs font-semibold text-stone-600 dark:text-stone-300">Congested Response Areas</p>
              <p className="mt-2 text-xs text-stone-500 dark:text-stone-400">Peak congestion observed in coastal corridors.</p>
              <div className="mt-auto h-32">
                <div className="flex h-[calc(100%-1rem)] items-end gap-1 border-b border-stone-300/70 dark:border-stone-600/70">
                  {congestionLevels.map((value, index) => (
                    <div key={`${value}-${index}`} className="group relative flex h-full flex-1 items-end justify-center">
                      <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden w-36 -translate-x-1/2 rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 shadow-sm group-hover:block dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
                        <p className="font-semibold">{congestionPeriods[index]}</p>
                        <p>Congestion index: {value}</p>
                        <p>Delay pressure: {((value / maxCongestion) * 100).toFixed(1)}%</p>
                      </div>
                      <div className="w-1.5 rounded-sm bg-red-500/70 transition-opacity duration-150 group-hover:opacity-100" style={{ height: `${(value / maxCongestion) * 100}%` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-stone-500 dark:text-stone-300">
                  {congestionPeriods.map((label) => (
                    <span key={label} className="flex-1 text-center">{label}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default DispatchOperationsDashboard
import React from 'react'

const PublicWarningDashboard = () => {
  const metrics = [
    { label: 'Active Public Alerts', value: '27' },
    { label: 'Alerts Issued Today', value: '63' },
    { label: 'Citizens Reached', value: '14.2M' },
    { label: 'Alert Delivery Success Rate', value: '93.8%' },
    { label: 'Affected States', value: '14' },
    { label: 'Flood Warning Areas', value: '22' },
    { label: 'Weather Alerts', value: '18' },
    { label: 'Health Alerts', value: '7' },
    { label: 'Evacuation Notices', value: '5' },
    { label: 'Alert Response Rate', value: '41.6%' },
  ];

  const alertTimeline = [22, 19, 24, 28, 34, 37, 33, 29, 31, 35, 39, 41];
  const alertPeriods = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
  const maxTimeline = Math.max(...alertTimeline);

  const channels = [
    { label: 'SMS Broadcast', value: 38 },
    { label: 'Mobile Push', value: 27 },
    { label: 'Siren Network', value: 14 },
    { label: 'Radio/TV Interrupt', value: 11 },
    { label: 'Social Broadcast', value: 10 },
  ];

  const mockWarningLocations = [
    { code: 'LA-IK', name: 'Ikeja, Lagos', alertType: 'Weather', affected: 186000, severity: 'High' },
    { code: 'LA-BD', name: 'Badagry, Lagos', alertType: 'Flood', affected: 92000, severity: 'Critical' },
    { code: 'AB-WS', name: 'Wuse, Abuja', alertType: 'Security', affected: 74000, severity: 'Medium' },
    { code: 'AB-GW', name: 'Gwagwalada, Abuja', alertType: 'Health', affected: 38000, severity: 'Low' },
    { code: 'RV-PH', name: 'Port Harcourt, Rivers', alertType: 'Flood', affected: 123000, severity: 'Critical' },
    { code: 'KN-NS', name: 'Nassarawa, Kano', alertType: 'Weather', affected: 68000, severity: 'Medium' },
    { code: 'OY-IB', name: 'Ibadan North, Oyo', alertType: 'Security', affected: 56000, severity: 'Medium' },
    { code: 'KD-CH', name: 'Chikun, Kaduna', alertType: 'Security', affected: 49000, severity: 'High' },
    { code: 'DE-WR', name: 'Warri, Delta', alertType: 'Flood', affected: 81000, severity: 'High' },
    { code: 'CR-CA', name: 'Calabar, Cross River', alertType: 'Flood', affected: 46000, severity: 'Medium' },
    { code: 'BR-MD', name: 'Maiduguri, Borno', alertType: 'Security', affected: 114000, severity: 'Critical' },
    { code: 'OG-AB', name: 'Abeokuta, Ogun', alertType: 'Health', affected: 35000, severity: 'Low' },
    { code: 'EN-EN', name: 'Enugu North, Enugu', alertType: 'Health', affected: 41000, severity: 'Low' },
    { code: 'AK-UK', name: 'Uyo, Akwa Ibom', alertType: 'Weather', affected: 29000, severity: 'Low' },
    { code: 'PL-JS', name: 'Jos North, Plateau', alertType: 'Security', affected: 52000, severity: 'Medium' },
    { code: 'BY-YN', name: 'Yenagoa, Bayelsa', alertType: 'Flood', affected: 67000, severity: 'High' },
  ];

  const severityTone = {
    Critical: 'bg-red-500/75 text-red-100',
    High: 'bg-orange-500/75 text-orange-100',
    Medium: 'bg-amber-500/75 text-amber-100',
    Low: 'bg-emerald/75 text-emerald-100',
  };

  return (
    <section className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {metrics.map((item) => (
          <article key={item.label} className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
            <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-900 dark:text-stone-100">{item.value}</h3>
          </article>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <article className="flex h-full flex-col rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10 xl:col-span-2">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Alerts Issued Trend</h3>
          <p className="mt-2 text-xs text-stone-500 dark:text-stone-400">12-hour rolling issuance volume</p>
          <div className="mt-auto h-40 rounded-lg bg-stone-100/80 p-2 dark:bg-stone-900/50">
            <div className="flex h-[calc(100%-1rem)] items-end gap-1 border-b border-stone-300/70 dark:border-stone-600/70">
              {alertTimeline.map((value, index) => (
                <div key={`${value}-${index}`} className="group relative flex h-full flex-1 items-end justify-center">
                  <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden w-36 -translate-x-1/2 rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 shadow-sm group-hover:block dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
                    <p className="font-semibold">{alertPeriods[index]}</p>
                    <p>Alerts issued: {value}</p>
                    <p>Intensity: {((value / maxTimeline) * 100).toFixed(1)}%</p>
                  </div>
                  <div className="w-1.5 rounded-sm bg-emerald/80 dark:bg-light-green/70" style={{ height: `${(value / maxTimeline) * 100}%` }} />
                </div>
              ))}
            </div>
            <div className="mt-1 flex items-center gap-1 text-[10px] text-stone-500 dark:text-stone-300">
              {alertPeriods.map((label) => (
                <span key={label} className="flex-1 text-center">{label}</span>
              ))}
            </div>
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Warning Channels</h3>
          <div className="mt-3 space-y-4">
            {channels.map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex items-center justify-between text-xs text-stone-600 dark:text-stone-300">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-stone-200 dark:bg-stone-700">
                  <div className="h-1.5 rounded-full bg-amber-500" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Affected States and Warning Areas</h3>
          <div className="mt-3 rounded-xl bg-linear-to-br from-stone-100 to-stone-200 p-3 dark:from-stone-800 dark:to-stone-700">
            <div className="mb-2 flex items-center gap-3 text-[10px] text-stone-600 dark:text-stone-300">
              <span className="font-semibold">Alert Severity:</span>
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-red-500" />Critical</span>
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-orange-500" />High</span>
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-amber-500" />Medium</span>
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-emerald" />Low</span>
            </div>
            <div className="grid h-44 grid-cols-8 gap-1.5">
              {mockWarningLocations.map((location) => (
                <div
                  key={location.code}
                  title={`${location.name} • ${location.alertType} • ${location.affected.toLocaleString()} affected • ${location.severity}`}
                  className={`group relative rounded-md px-1 py-1 ${severityTone[location.severity]}`}
                >
                  <p className="text-[10px] font-semibold leading-tight">{location.code}</p>
                  <p className="text-[10px] leading-tight">{Math.round(location.affected / 1000)}k</p>

                  <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 hidden w-44 -translate-x-1/2 rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 shadow-sm group-hover:block dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
                    <p className="font-semibold">{location.name}</p>
                    <p>Alert: {location.alertType}</p>
                    <p>Affected: {location.affected.toLocaleString()}</p>
                    <p>Severity: {location.severity}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-stone-600 dark:text-stone-300">Mock warning map with labeled monitored locations, impacted population, and active alert severity.</p>
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Evacuation and Citizen Engagement</h3>
          <div className="mt-3 space-y-3">
            <div className="rounded-lg bg-red-500/10 px-3 py-3 text-red-700 dark:text-red-300">
              <p className="text-xs">Evacuation Notices</p>
              <p className="text-base font-semibold">5 active orders across 3 corridors</p>
            </div>
            <div className="rounded-lg bg-stone-100 px-3 py-3 dark:bg-stone-800/20">
              <p className="text-xs text-stone-500 dark:text-stone-400">Citizens Reached</p>
              <p className="text-base font-semibold text-stone-900 dark:text-stone-100">14.2M recipients</p>
            </div>
            <div className="rounded-lg bg-stone-100 px-3 py-3 dark:bg-stone-800/20">
              <p className="text-xs text-stone-500 dark:text-stone-400">Alert Response Rate</p>
              <p className="text-base font-semibold text-stone-900 dark:text-stone-100">41.6% acknowledged / opened</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default PublicWarningDashboard
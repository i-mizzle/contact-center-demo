import React from 'react'

const CommandDashboard = () => {
  const nationalOverview = [
    { label: 'Active Emergencies', value: '284', delta: '+7.2%', tone: 'text-red-500' },
    { label: 'Active Responders', value: '5,462', delta: '+3.1%', tone: 'text-emerald' },
    { label: 'Emergency Calls Today', value: '12,904', delta: '+4.8%', tone: 'text-amber-500' },
    { label: 'Incidents Resolved Today', value: '10,112', delta: '+5.5%', tone: 'text-emerald' },
    { label: 'Average Response Time', value: '08m 34s', delta: '-0.9m', tone: 'text-emerald' },
    { label: 'Critical Incidents', value: '38', delta: '+2', tone: 'text-red-500' },
    { label: 'Public Alerts Issued', value: '42', delta: '+6', tone: 'text-amber-500' },
    { label: 'National Threat Level', value: 'Level 3', delta: 'Elevated', tone: 'text-red-500' },
  ];

  const incidentTrend = [120, 134, 128, 141, 166, 173, 184, 177, 169, 162, 171, 188, 196, 204];
  const incidentTrendLabels = incidentTrend.map((_, index) => `Day ${index + 1}`);
  const incidentTrendAxisLabels = incidentTrend.map((_, index) => `D${index + 1}`);
  const incidentCategories = [
    { label: 'Police', value: 34 },
    { label: 'Medical', value: 29 },
    { label: 'Fire', value: 17 },
    { label: 'Road Accident', value: 12 },
    { label: 'Disaster', value: 8 },
  ];
  const incidentsByState = [
    { state: 'Lagos', count: 421 },
    { state: 'Abuja', count: 304 },
    { state: 'Rivers', count: 233 },
    { state: 'Kano', count: 212 },
    { state: 'Oyo', count: 189 },
  ];
  const hourlyDistribution = [8, 11, 10, 12, 16, 22, 26, 31, 34, 28, 19, 14];
  const hourlyLabels = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
  const severityBreakdown = [
    { label: 'Critical', value: 9, color: 'bg-red-500' },
    { label: 'High', value: 23, color: 'bg-orange-500' },
    { label: 'Medium', value: 42, color: 'bg-amber-500' },
    { label: 'Low', value: 26, color: 'bg-emerald' },
  ];
  const topIncidentTypes = ['Armed Robbery', 'Fire Outbreak', 'Road Collision', 'Flooding', 'Medical Distress'];

  const crimeIntel = [
    { label: 'Crime Trend', value: '+6.4% WoW' },
    { label: 'Crime Hotspots', value: '14 zones' },
    { label: 'Most Reported Crimes', value: 'Robbery, Assault, Burglary' },
    { label: 'Repeat Incident Locations', value: '67 addresses' },
    { label: 'High-Risk Areas', value: '23 districts' },
    { label: 'Emerging Threats', value: 'Cyber-enabled extortion uptick' },
  ];

  const publicSafety = [
    { label: 'Flood Alerts', value: '11 active zones' },
    { label: 'Weather Alerts', value: '18 severe warnings' },
    { label: 'Disease Outbreak Alerts', value: '4 monitored clusters' },
    { label: 'Public Warning Coverage', value: '84% reachable population' },
    { label: 'Evacuation Zones', value: '7 active corridors' },
  ];

  const opsPerformance = [
    { label: 'SLA Compliance', value: '91.8%' },
    { label: 'Average Dispatch Time', value: '02m 17s' },
    { label: 'Average Resolution Time', value: '42m 13s' },
    { label: 'Open Incidents', value: '1,294' },
    { label: 'Escalated Incidents', value: '186' },
    { label: 'False Alarm Rate', value: '4.2%' },
  ];

  const responseByRegion = [
    { region: 'South West', time: 7.4 },
    { region: 'South South', time: 8.1 },
    { region: 'North Central', time: 9.5 },
    { region: 'North West', time: 10.2 },
    { region: 'North East', time: 11.3 },
  ];

  const mockIncidentLocations = [
    { code: 'LA-IK', name: 'Ikeja, Lagos', incidents: 42, risk: 'Critical' },
    { code: 'LA-SR', name: 'Surulere, Lagos', incidents: 31, risk: 'High' },
    { code: 'LA-LK', name: 'Lekki, Lagos', incidents: 26, risk: 'High' },
    { code: 'AB-MT', name: 'Maitama, Abuja', incidents: 18, risk: 'Medium' },
    { code: 'AB-WS', name: 'Wuse, Abuja', incidents: 24, risk: 'High' },
    { code: 'AB-GW', name: 'Gwagwalada, Abuja', incidents: 12, risk: 'Low' },
    { code: 'RV-PH', name: 'Port Harcourt, Rivers', incidents: 29, risk: 'High' },
    { code: 'RV-OB', name: 'Obio-Akpor, Rivers', incidents: 22, risk: 'Medium' },
    { code: 'KN-NS', name: 'Nassarawa, Kano', incidents: 19, risk: 'Medium' },
    { code: 'KN-FG', name: 'Fagge, Kano', incidents: 15, risk: 'Low' },
    { code: 'OY-IB', name: 'Ibadan North, Oyo', incidents: 21, risk: 'Medium' },
    { code: 'OY-IS', name: 'Iseyin, Oyo', incidents: 9, risk: 'Low' },
    { code: 'KD-ZR', name: 'Zaria, Kaduna', incidents: 16, risk: 'Low' },
    { code: 'KD-CH', name: 'Chikun, Kaduna', incidents: 20, risk: 'Medium' },
    { code: 'ED-BN', name: 'Benin City, Edo', incidents: 17, risk: 'Low' },
    { code: 'AN-AK', name: 'Awka, Anambra', incidents: 14, risk: 'Low' },
    { code: 'DE-WR', name: 'Warri, Delta', incidents: 23, risk: 'Medium' },
    { code: 'EN-EN', name: 'Enugu North, Enugu', incidents: 13, risk: 'Low' },
    { code: 'OG-AB', name: 'Abeokuta, Ogun', incidents: 11, risk: 'Low' },
    { code: 'OS-OS', name: 'Osogbo, Osun', incidents: 10, risk: 'Low' },
    { code: 'AK-UK', name: 'Uyo, Akwa Ibom', incidents: 8, risk: 'Low' },
    { code: 'CR-CA', name: 'Calabar, Cross River', incidents: 7, risk: 'Low' },
    { code: 'PL-JS', name: 'Jos North, Plateau', incidents: 12, risk: 'Low' },
    { code: 'BR-MD', name: 'Maiduguri, Borno', incidents: 27, risk: 'High' },
  ];

  const riskTone = {
    Critical: 'bg-red-500/75 text-red-100',
    High: 'bg-orange-500/75 text-orange-100',
    Medium: 'bg-amber-500/75 text-amber-100',
    Low: 'bg-emerald/75 text-emerald-100',
  };

  const maxTrend = Math.max(...incidentTrend);
  const maxHourly = Math.max(...hourlyDistribution);

  return (
    <section className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {nationalOverview.map((item) => (
          <article key={item.label} className="rounded-lg border border-stone-200 bg-white p-4 shadow-sm shadow-black/5 dark:border-stone-900/50 dark:bg-stone-900/10">
            <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-900 dark:text-stone-100">{item.value}</h3>
            <p className={`mt-1 text-xs font-semibold ${item.tone}`}>{item.delta}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <article className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10 xl:col-span-2">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Incident Volume Trend</h3>
          <p className="mt-2 text-xs text-stone-500 dark:text-stone-400">Daily incident trend over 14 days</p>
          <div className="mt-auto h-45 rounded-lg bg-stone-100/80 p-2 dark:bg-stone-900/50">
            <div className="flex h-[calc(100%-1rem)] items-end gap-1 border-b border-stone-300/70 dark:border-stone-600/40">
              {incidentTrend.map((value, index) => (
                <div key={`${value}-${index}`} className="group relative flex h-full flex-1 items-end justify-center">
                  <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden w-36 -translate-x-1/2 rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 shadow-sm group-hover:block dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
                    <p className="font-semibold">{incidentTrendLabels[index]}</p>
                    <p>Incidents: {value}</p>
                    <p>Trend share: {((value / maxTrend) * 100).toFixed(1)}%</p>
                  </div>
                  <div className="w-1.5 rounded-sm bg-emerald/80 transition-opacity duration-150 group-hover:opacity-100 dark:bg-light-green/70" style={{ height: `${(value / maxTrend) * 100}%` }} />
                </div>
              ))}
            </div>
            <div className="mt-1 flex items-center gap-1 text-[10px] text-stone-500 dark:text-stone-300">
              {incidentTrendAxisLabels.map((label) => (
                <span key={label} className="flex-1 text-center">{label}</span>
              ))}
            </div>
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Incidents by Category</h3>
          <div className="mt-4 space-y-3">
            {incidentCategories.map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex items-center justify-between text-xs text-stone-600 dark:text-stone-300">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-stone-200 dark:bg-stone-700">
                  <div className="h-1.5 rounded-full bg-emerald dark:bg-light-green" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Incidents by State</h3>
          <div className="mt-3 space-y-2">
            {incidentsByState.map((item) => (
              <div key={item.state} className="flex items-center justify-between rounded-lg bg-stone-100 px-3 py-2 text-sm dark:bg-stone-800/20">
                <span className="text-stone-700 dark:text-stone-200">{item.state}</span>
                <span className="font-semibold text-stone-900 dark:text-stone-100">{item.count}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="flex h-full flex-col rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Hourly Incident Distribution</h3>
          <div className="mt-auto h-36 rounded-lg">
            <div className="flex h-[calc(100%-1rem)] items-end gap-1 border-b border-stone-300/70 dark:border-stone-600/70">
              {hourlyDistribution.map((value, index) => (
                <div key={`${value}-${index}`} className="group relative flex h-full flex-1 items-end justify-center">
                  <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden w-32 -translate-x-1/2 rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 shadow-sm group-hover:block dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
                    <p className="font-semibold">{hourlyLabels[index]}</p>
                    <p>Incidents: {value}</p>
                    <p>Load: {((value / maxHourly) * 100).toFixed(1)}%</p>
                  </div>
                  <div className="w-1.5 rounded-sm bg-amber-500/80 transition-opacity duration-150 group-hover:opacity-100" style={{ height: `${(value / maxHourly) * 100}%` }} />
                </div>
              ))}
            </div>
            <div className="mt-1 flex items-center gap-1 text-[10px] text-stone-500 dark:text-stone-300">
              {hourlyLabels.map((label) => (
                <span key={label} className="flex-1 text-center">{label}</span>
              ))}
            </div>
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Incident Severity Breakdown</h3>
          <div className="mt-4 space-y-3">
            {severityBreakdown.map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                  <span className="text-stone-700 dark:text-stone-200">{item.label}</span>
                </div>
                <span className="font-semibold text-stone-900 dark:text-stone-100">{item.value}%</span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-stone-200 p-3 dark:border-stone-700">
            <p className="text-xs text-stone-500 dark:text-stone-400">Top Incident Types</p>
            <p className="mt-1 text-sm text-stone-700 dark:text-stone-200">{topIncidentTypes.join(', ')}</p>
          </div>
        </article>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Crime Intelligence</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {crimeIntel.map((item) => (
              <div key={item.label} className="rounded-lg bg-stone-100 px-3 py-2 dark:bg-stone-800/20">
                <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-stone-800 dark:text-stone-100">{item.value}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Public Safety Alerts</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {publicSafety.map((item) => (
              <div key={item.label} className="rounded-lg bg-stone-100 px-3 py-2 dark:bg-stone-800/20">
                <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-stone-800 dark:text-stone-100">{item.value}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
        <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Operational Performance</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
          {opsPerformance.map((item) => (
            <div key={item.label} className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 dark:border-stone-700/50 dark:bg-stone-800/20">
              <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
            </div>
          ))}
        </div>
      </article>

      <div className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/20 dark:bg-stone-900/10 xl:col-span-2">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Geographic Intelligence: Live Incident Map</h3>
          <div className="mt-4 rounded-xl">
            <div className="mb-2 flex items-center gap-3 text-[10px] text-stone-600 dark:text-stone-300">
              <span className="font-semibold">Risk Legend:</span>
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-red-500" />Critical</span>
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-orange-500" />High</span>
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-amber-500" />Medium</span>
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-emerald" />Low</span>
            </div>
            <div className="grid h-56 grid-cols-6 gap-2">
              {mockIncidentLocations.map((location) => (
                <div
                  key={location.code}
                  title={`${location.name} • ${location.incidents} incidents • ${location.risk} risk`}
                  className={`group relative rounded-md px-1.5 py-1 ${riskTone[location.risk]}`}
                >
                  <p className="text-[10px] font-semibold leading-tight">{location.code}</p>
                  <p className="text-[10px] leading-tight">{location.incidents}</p>

                  <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 hidden w-40 -translate-x-1/2 rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 shadow-sm group-hover:block dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
                    <p className="font-semibold">{location.name}</p>
                    <p>Incidents: {location.incidents}</p>
                    <p>Risk: {location.risk}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-stone-600 dark:text-stone-300">Location heat map: each tile represents a named monitored location with current incident count and risk level.</p>
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Response Time by Region</h3>
          <div className="mt-4 space-y-3">
            {responseByRegion.map((item) => (
              <div key={item.region}>
                <div className="mb-1 flex items-center justify-between text-xs text-stone-600 dark:text-stone-300">
                  <span>{item.region}</span>
                  <span>{item.time.toFixed(1)} min</span>
                </div>
                <div className="h-1.5 rounded-full bg-stone-200 dark:bg-stone-700">
                  <div className="h-1.5 rounded-full bg-emerald dark:bg-light-green" style={{ width: `${Math.min((12 - item.time) * 10, 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg bg-stone-100 p-3 text-xs text-stone-600 dark:bg-stone-800 dark:text-stone-300">
            <p>Responder Locations: 5,462 active units</p>
            <p className="mt-1">Agency Coverage Map: 94% national coverage</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default CommandDashboard
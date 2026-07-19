import React from 'react'

const CallCenterDashboard = () => {
  const liveOperations = [
    { label: 'Calls Waiting', value: 42, tone: 'text-amber-500' },
    { label: 'Calls in Progress', value: 118, tone: 'text-emerald' },
    { label: 'Available Agents', value: 76, tone: 'text-emerald' },
    { label: 'Busy Agents', value: 118, tone: 'text-red-500' },
    { label: 'Offline Agents', value: 21, tone: 'text-stone-500' },
    { label: 'Supervisors Online', value: 9, tone: 'text-emerald' },
  ];

  const callStats = [
    { label: 'Calls Received Today', value: '7,832' },
    { label: 'Calls Answered', value: '7,214' },
    { label: 'Missed Calls', value: '286' },
    { label: 'Abandoned Calls', value: '332' },
    { label: 'Silent SOS Requests', value: '64' },
    { label: 'SMS Emergencies', value: '412' },
    { label: 'App SOS Requests', value: '598' },
  ];

  const queuePerformance = [
    { label: 'Average Wait Time', value: '00:54' },
    { label: 'Longest Waiting Call', value: '04:12' },
    { label: 'Average Call Duration', value: '06:38' },
    { label: 'Average Wrap-up Time', value: '01:14' },
    { label: 'Queue Length', value: '42 callers' },
  ];

  const callsPerHour = [48, 52, 55, 61, 58, 65, 72, 76, 79, 75, 68, 63];
  const callHours = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
  const maxCalls = Math.max(...callsPerHour);

  const agentPerformance = [
    { label: 'Calls Handled per Agent', value: '61/day' },
    { label: 'First Call Resolution', value: '82.5%' },
    { label: 'Escalation Rate', value: '12.3%' },
    { label: 'Customer Satisfaction Score', value: '4.4 / 5' },
    { label: 'QA Score', value: '91.2%' },
    { label: 'Active Breaks', value: '14' },
  ];

  const intake = [
    { label: 'Incidents Created Today', value: '2,096' },
    { label: 'Calls Converted to Incidents', value: '26.8%' },
    { label: 'Duplicate Reports', value: '178' },
    { label: 'False Alarm Reports', value: '93' },
  ];

  return (
    <section className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {liveOperations.map((item) => (
          <article key={item.label} className="rounded-lg border border-stone-200 bg-white p-4 shadow-sm shadow-black/5 dark:border-stone-900/50 dark:bg-stone-900/10">
            <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-900 dark:text-stone-100">{item.value}</h3>
            <p className={`mt-1 text-xs font-semibold ${item.tone}`}>Live</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <article className="flex h-full flex-col rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10 xl:col-span-2">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Call Volume by Hour</h3>
          <p className="mt-2 text-xs text-stone-500 dark:text-stone-400">Peak intake period: 14:00 - 17:00</p>
          <div className="mt-auto h-60 rounded-lg bg-stone-100/50 p-2 dark:bg-stone-900/10">
            <div className="flex h-[calc(100%-1rem)] items-end gap-1 border-b border-stone-300/70 dark:border-stone-600/70">
              {callsPerHour.map((value, index) => (
                <div key={`${value}-${index}`} className="group relative flex h-full flex-1 items-end justify-center">
                  <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden w-36 -translate-x-1/2 rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 shadow-sm group-hover:block dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
                    <p className="font-semibold">{callHours[index]}</p>
                    <p>Calls: {value}</p>
                    <p>Relative load: {((value / maxCalls) * 100).toFixed(1)}%</p>
                  </div>
                  <div className="w-1.5 rounded-sm bg-emerald/80 transition-opacity duration-150 group-hover:opacity-100 dark:bg-light-green/70" style={{ height: `${(value / maxCalls) * 100}%` }} />
                </div>
              ))}
            </div>
            <div className="mt-1 flex items-center gap-1 text-[10px] text-stone-500 dark:text-stone-300">
              {callHours.map((label) => (
                <span key={label} className="flex-1 text-center">{label}</span>
              ))}
            </div>
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Queue Performance</h3>
          <div className="mt-3 space-y-2">
            {queuePerformance.map((item) => (
              <div key={item.label} className="rounded-lg bg-stone-100 px-3 py-2 dark:bg-stone-800/20">
                <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Call Statistics</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {callStats.map((item) => (
              <div key={item.label} className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 dark:border-stone-700/50 dark:bg-stone-800/20">
                <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Agent Performance</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {agentPerformance.map((item) => (
              <div key={item.label} className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 dark:border-stone-700/50 dark:bg-stone-800/20">
                <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
        <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Incident Intake</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {intake.map((item) => (
            <div key={item.label} className="rounded-lg bg-stone-100 px-3 py-3 dark:bg-stone-800/20">
              <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
              <p className="mt-1 text-base font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

export default CallCenterDashboard
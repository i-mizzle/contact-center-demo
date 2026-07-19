import React from 'react'

const AnalyticsIntelligence = () => {
  const incidentAnalytics = [
    { label: 'Incident Growth Rate', value: '+4.9% MoM' },
    { label: 'Incident Forecast', value: '13,400 next week' },
    { label: 'Seasonal Trends', value: 'Rainy season spike +18%' },
    { label: 'Day vs Night Comparison', value: '62% Day / 38% Night' },
    { label: 'Weekday vs Weekend', value: '54% / 46%' },
  ];

  const crimeAnalytics = [
    { label: 'Crime Rate by State', value: 'Lagos 4.8, FCT 3.9, Rivers 3.6' },
    { label: 'Crime Rate by LGA', value: 'Alimosho, Gwagwalada, Obio-Akpor highest' },
    { label: 'Crime Type Distribution', value: 'Robbery 29%, Assault 24%, Burglary 18%' },
    { label: 'Crime Hotspots', value: '14 hotspot clusters' },
    { label: 'Repeat Offender Areas', value: '11 recurrent zones' },
  ];

  const emergencyAnalytics = [
    { label: 'Medical Emergency Trends', value: '+7.1% demand' },
    { label: 'Fire Incident Trends', value: '-2.4% vs last quarter' },
    { label: 'Road Accident Trends', value: '+9.3% nighttime increase' },
    { label: 'Disaster Trends', value: 'Flood alerts up 12%' },
    { label: 'Humanitarian Incidents', value: '27 active relief requests' },
  ];

  const aiInsights = [
    { label: 'Predicted Hotspots', value: 'Mainland West, Coastal Belt, Kano North' },
    { label: 'Predicted Incident Volume', value: '1,980 ± 110 / day' },
    { label: 'Resource Recommendations', value: 'Deploy +18 patrols and +6 ambulances' },
    { label: 'Emerging Threat Detection', value: 'Coordinated telecom fraud alerts increasing' },
    { label: 'Anomaly Detection', value: 'Unusual midnight surge in silent SOS' },
  ];

  const growthTrend = [46, 48, 52, 55, 58, 63, 61, 64, 66, 69, 71, 74];
  const forecastTrend = [74, 77, 79, 82, 85, 88, 90];
  const growthPeriods = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'];
  const forecastPeriods = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7'];
  const maxGrowth = Math.max(...growthTrend, ...forecastTrend);

  return (
    <section className="space-y-5">
      <div className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10 xl:col-span-2">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Incident Growth and Forecast</h3>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <div className="flex h-full flex-col rounded-xl bg-stone-100 p-3 dark:bg-stone-800/20">
              <p className="text-xs font-semibold text-stone-600 dark:text-stone-300">Incident Growth Rate</p>
              <div className="mt-auto h-45">
                <div className="flex h-[calc(100%-2rem)] items-end gap-1 border-b border-stone-300/70 dark:border-stone-600/70">
                  {growthTrend.map((value, index) => (
                    <div key={`${value}-${index}`} className="group relative flex h-full flex-1 items-end justify-center">
                      <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden w-32 -translate-x-1/2 rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 shadow-sm group-hover:block dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
                        <p className="font-semibold">{growthPeriods[index]}</p>
                        <p>Index: {value}</p>
                        <p>Relative: {((value / maxGrowth) * 100).toFixed(1)}%</p>
                      </div>
                      <div className="w-1.5 rounded-sm bg-emerald/80 dark:bg-light-green/70" style={{ height: `${(value / maxGrowth) * 100}%` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-stone-500 dark:text-stone-300">
                  {growthPeriods.map((label) => (
                    <span key={label} className="flex-1 text-center">{label}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col rounded-xl bg-stone-100 p-3 dark:bg-stone-800/20">
              <p className="text-xs font-semibold text-stone-600 dark:text-stone-300">Predicted Incident Volume</p>
              <div className="mt-auto h-45">
                <div className="flex h-[calc(100%-2rem)] items-end gap-1 border-b border-stone-300/70 dark:border-stone-600/70">
                  {forecastTrend.map((value, index) => (
                    <div key={`${value}-${index}`} className="group relative flex h-full flex-1 items-end justify-center">
                      <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden w-32 -translate-x-1/2 rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 shadow-sm group-hover:block dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
                        <p className="font-semibold">{forecastPeriods[index]}</p>
                        <p>Volume: {value}</p>
                        <p>Relative: {((value / maxGrowth) * 100).toFixed(1)}%</p>
                      </div>
                      <div className="w-1.5 rounded-sm bg-amber-500/80" style={{ height: `${(value / maxGrowth) * 100}%` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-stone-500 dark:text-stone-300">
                  {forecastPeriods.map((label) => (
                    <span key={label} className="flex-1 text-center">{label}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-green-500/10 p-4 dark:border-stone-900/50 dark:bg-green-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">AI Insights</h3>
          <div className="mt-3 space-y-2">
            {aiInsights.map((item) => (
              <div key={item.label} className="rounded-lg bg-stone-100 px-3 py-2 dark:bg-stone-800/20">
                <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
                <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Incident Analytics</h3>
          <div className="mt-3 space-y-2">
            {incidentAnalytics.map((item) => (
              <div key={item.label} className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 dark:border-stone-700/50 dark:bg-stone-800/20">
                <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
                <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Crime Analytics</h3>
          <div className="mt-3 space-y-2">
            {crimeAnalytics.map((item) => (
              <div key={item.label} className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 dark:border-stone-700/50 dark:bg-stone-800/20">
                <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
                <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Emergency Analytics</h3>
          <div className="mt-3 space-y-2">
            {emergencyAnalytics.map((item) => (
              <div key={item.label} className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 dark:border-stone-700/50 dark:bg-stone-800/20">
                <p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
                <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default AnalyticsIntelligence
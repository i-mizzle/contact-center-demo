import React from 'react'

const PerformanceDashboard = () => {
	const police = [
		{ label: 'Police Response Time', value: '07m 54s' },
		{ label: 'Cases Handled', value: '4,812' },
		{ label: 'Clearance Rate', value: '83.7%' },
		{ label: 'Patrol Coverage', value: '88.4%' },
	];

	const fireService = [
		{ label: 'Fire Response Time', value: '08m 31s' },
		{ label: 'Fires Extinguished', value: '612' },
		{ label: 'Rescue Operations', value: '209' },
		{ label: 'Equipment Availability', value: '91.3%' },
	];

	const medicalServices = [
		{ label: 'Ambulance Response Time', value: '09m 08s' },
		{ label: 'Patients Assisted', value: '3,426' },
		{ label: 'Hospital Transfers', value: '2,711' },
		{ label: 'Ambulance Availability', value: '86.5%' },
	];

	const overall = [
		{ label: 'Agency SLA Compliance', value: '90.6%' },
		{ label: 'Inter-Agency Response Time', value: '03m 11s sync time' },
		{ label: 'Joint Operations', value: '318 this month' },
		{ label: 'Resource Sharing', value: '27% cross-agency usage' },
	];

	const slaByAgency = [
		{ label: 'Police', value: 92 },
		{ label: 'Fire', value: 89 },
		{ label: 'Medical', value: 87 },
		{ label: 'Joint Ops', value: 94 },
	];

	return (
		<section className="space-y-5">
			<div className="grid gap-4 xl:grid-cols-4">
				{overall.map((item) => (
					<article key={item.label} className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
						<p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
						<h3 className="mt-2 text-2xl font-semibold text-stone-900 dark:text-stone-100">{item.value}</h3>
					</article>
				))}
			</div>

			<div className="grid gap-4 xl:grid-cols-3">
				<article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
					<h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Police</h3>
					<div className="mt-3 space-y-2">
						{police.map((item) => (
							<div key={item.label} className="rounded-lg bg-stone-100 px-3 py-2 dark:bg-stone-800/20">
								<p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
								<p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
							</div>
						))}
					</div>
				</article>

				<article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
					<h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Fire Service</h3>
					<div className="mt-3 space-y-2">
						{fireService.map((item) => (
							<div key={item.label} className="rounded-lg bg-stone-100 px-3 py-2 dark:bg-stone-800/20">
								<p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
								<p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
							</div>
						))}
					</div>
				</article>

				<article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
					<h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Medical Services</h3>
					<div className="mt-3 space-y-2">
						{medicalServices.map((item) => (
							<div key={item.label} className="rounded-lg bg-stone-100 px-3 py-2 dark:bg-stone-800/20">
								<p className="text-xs text-stone-500 dark:text-stone-400">{item.label}</p>
								<p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</p>
							</div>
						))}
					</div>
				</article>
			</div>

			<article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-900/50 dark:bg-stone-900/10">
				<h3 className="text-sm font-semibold text-stone-800 dark:text-stone-100">Overall Performance</h3>
				<div className="mt-4 space-y-5">
					{slaByAgency.map((item) => (
						<div key={item.label}>
							<div className="mb-1 flex items-center justify-between text-xs text-stone-600 dark:text-stone-300">
								<span>{item.label} SLA Compliance</span>
								<span>{item.value}%</span>
							</div>
							<div className="h-1.5 rounded-full bg-stone-200 dark:bg-stone-700">
								<div className="h-1.5 rounded-full bg-emerald dark:bg-light-green" style={{ width: `${item.value}%` }} />
							</div>
						</div>
					))}
				</div>
			</article>
		</section>
	)
}

export default PerformanceDashboard

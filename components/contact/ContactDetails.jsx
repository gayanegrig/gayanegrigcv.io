import { useEffect, useState } from 'react';
import * as Icons from 'react-icons/fi';

function ContactDetails()
{
	const [contactDetailsData, setContactDetailsData] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchContactDetailsData = async () =>
	{
		try
		{
			setLoading(true);
			const response = await fetch('/api/contact-info');
			const data = await response.json();
			setContactDetailsData(data);
		} catch (error)
		{
			console.error('Failed to fetch contact details:', error);
		} finally
		{
			setLoading(false);
		}
	};

	useEffect(() =>
	{
		fetchContactDetailsData();
	}, []);

	const getColorClasses = (id) =>
	{
		switch (id)
		{
			case 1:
				return 'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400';
			case 2:
				return 'bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400';
			case 3:
				return 'bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400';
			default:
				return 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400';
		}
	};

	if (loading)
	{
		return (
			<div className="h-full rounded-3xl border border-ternary-light dark:border-slate-700/70 bg-white dark:bg-slate-800/60 backdrop-blur-md shadow-sm p-4 sm:p-6">
				<div className="animate-pulse space-y-4">
					<div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700" />
					<div className="h-8 w-40 rounded bg-slate-200 dark:bg-slate-700" />
					<div className="h-16 rounded-2xl bg-slate-200 dark:bg-slate-700" />
					<div className="h-16 rounded-2xl bg-slate-200 dark:bg-slate-700" />
					<div className="h-16 rounded-2xl bg-slate-200 dark:bg-slate-700" />
				</div>
			</div>
		);
	}

	return (
		<div className="h-full rounded-3xl border border-ternary-light dark:border-slate-700/70 bg-gradient-to-br from-emerald-50 via-white to-white dark:from-slate-800/70 dark:via-slate-800/60 dark:to-slate-800/50 backdrop-blur-md shadow-sm p-4 sm:p-6 lg:p-7 flex flex-col justify-between">
			<div>
				<p className="text-xs uppercase tracking-[0.18em] text-emerald-500 font-semibold">
					Contact info
				</p>

				<p className="mt-3 text-sm sm:text-base leading-6 text-ternary-dark dark:text-slate-300">
					You can reach me through the following platforms. I’m open to discussing
					new opportunities, freelance work, and collaborations.
				</p>

				<ul className="mt-6 space-y-3">
					{contactDetailsData?.map((contact) =>
					{
						const IconComponent = Icons[contact.icon];

						return (
							<li key={contact.id}>
								<a
									href={contact.action || '#'}
									className="w-full group flex flex-col sm:flex-row sm:items-center gap-3 p-3 sm:p-4 rounded-2xl border border-ternary-light dark:border-slate-700/70 bg-white dark:bg-slate-800/70 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
									target={contact.action?.startsWith('http') ? '_blank' : undefined}
									rel={contact.action?.startsWith('http') ? 'noopener noreferrer' : undefined}
								>
									<div
										className={`w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0 ${getColorClasses(
											contact.id
										)}`}
									>
										{IconComponent && <IconComponent className="text-lg" />}
									</div>

									<div className="flex-1 min-w-0">
										<p className="text-sm sm:text-base font-semibold text-primary-dark dark:text-white break-words">
											{contact.name}
										</p>

										{contact.label && (
											<p className="text-xs sm:text-sm text-ternary-dark dark:text-slate-400 mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
												{contact.label}
											</p>
										)}
									</div>

									<span className="text-xs sm:text-sm text-emerald-500 font-medium sm:self-center self-start opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
										Open
									</span>
								</a>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="mt-6 rounded-2xl bg-white dark:bg-slate-800/70 border border-ternary-light dark:border-slate-700/70 p-4 sm:p-5 backdrop-blur-md">
				<p className="text-xs sm:text-sm leading-6 text-ternary-dark dark:text-slate-300">
					I’m always happy to connect about new projects, collaborations, and
					thoughtful product ideas.
				</p>
			</div>
		</div>
	);
}

export default ContactDetails;
import { useState } from 'react';
import { motion } from 'framer-motion';
import { aboutMeData } from '../../data/aboutMeData';
import { useTranslation } from 'react-i18next';

function AboutMeBio()
{
	const { t } = useTranslation();
	const [aboutMe] = useState(aboutMeData);
	const startYear = 2021;
	const yearsOfExperience = new Date().getFullYear() - startYear;

	return (
		<section className="relative mt-12 sm:mt-20 overflow-hidden">
			<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-emerald-400/10 dark:bg-emerald-300/10 blur-3xl rounded-full pointer-events-none" />

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="text-center max-w-3xl mx-auto">
					<p className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-semibold">
						About me
					</p>

					<h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white">
						Crafting clean, modern and user-focused digital experiences
					</h1>

					<p className="mt-5 text-base sm:text-lg leading-8 text-ternary-dark dark:text-slate-300">
						I’m passionate about building polished interfaces, solving real problems, and creating products that feel simple, useful, and beautiful.
					</p>
				</div>

				<div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.5 }}
						className="lg:col-span-8 rounded-3xl border border-ternary-light dark:border-slate-700/70 bg-white dark:bg-slate-800/60 backdrop-blur-md shadow-sm p-6 sm:p-8 lg:p-10"
					>
						<div className="space-y-5">
							{aboutMe.map((bio) => (
								<p
									key={bio.id}
									className="text-base sm:text-lg leading-8 text-ternary-dark dark:text-slate-300"
								>
									{t(bio.bio, { years: yearsOfExperience })}
								</p>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="lg:col-span-4"
					>
						<div className="h-full rounded-3xl border border-ternary-light dark:border-slate-700/70 bg-gradient-to-br from-emerald-50 via-white to-white dark:from-slate-800/70 dark:via-slate-800/60 dark:to-slate-800/50 backdrop-blur-md shadow-sm p-6 sm:p-8 flex flex-col justify-between">
							<div>
								<p className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-semibold">
									What I focus on
								</p>

								<ul className="mt-6 space-y-4 text-ternary-dark dark:text-slate-300">
									<li className="flex items-start gap-3">
										<span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
										<span>Responsive and accessible front-end interfaces</span>
									</li>

									<li className="flex items-start gap-3">
										<span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
										<span>Clean architecture and reusable UI components</span>
									</li>

									<li className="flex items-start gap-3">
										<span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
										<span>Performance, usability, and smooth user experience</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
										<span>
											I actively use AI tools in development for faster debugging, smarter code generation,
											UI prototyping, and improving overall development workflows.
										</span>
									</li>
								</ul>
							</div>

							<div className="mt-8 rounded-2xl bg-white dark:bg-slate-800/70 border border-ternary-light dark:border-slate-700/70 p-5 backdrop-blur-md">
								<p className="text-sm leading-7 text-ternary-dark dark:text-slate-300">
									I enjoy turning ideas into products that are not only functional, but also elegant and enjoyable to use.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default AboutMeBio;
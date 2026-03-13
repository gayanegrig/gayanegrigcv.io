import { motion } from 'framer-motion';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

function Contact()
{
	const fadeUp = {
		hidden: { opacity: 0, y: 30 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
			},
		},
	};

	return (
		<div>

			<section className="relative mt-12 sm:mt-20 overflow-hidden">
				<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-emerald-400/10 dark:bg-emerald-300/10 blur-3xl rounded-full pointer-events-none" />

				<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.2 }}
						className="text-center max-w-3xl mx-auto"
					>
						<p className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-semibold">
							Contact
						</p>

						<h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-white">
							Get in touch
						</h1>

						<p className="mt-5 text-base sm:text-lg leading-8 text-ternary-dark dark:text-slate-300">
							Have a project idea, a question, or just want to say hello? Send a message and I’ll get back to you.
						</p>
					</motion.div>

					<div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
						<motion.div
							variants={fadeUp}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, amount: 0.2 }}
							className="lg:col-span-5"
						>
							<ContactDetails />
						</motion.div>

						<motion.div
							variants={fadeUp}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, amount: 0.2 }}
							className="lg:col-span-7"
						>
							<ContactForm />
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact;
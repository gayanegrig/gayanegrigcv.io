import { motion } from 'framer-motion';
import AboutClients from './AboutClients';
import AboutCounter from './AboutCounter';
import AboutMeBio from './AboutMeBio';
import TechnologiesTools from './AboutMyTech';

function About()
{
	return (
		<div >

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="mx-auto"
			>
				<AboutMeBio />
			</motion.div>
			<TechnologiesTools />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="mx-auto"

			>
				<AboutCounter />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="mx-auto"
			>
				<AboutClients />
			</motion.div>
		</div>
	);
}

export default About;

import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';
function AboutCounter()
{
	useCountUp({ ref: 'experienceCounter', end: 4, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 80, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm relative">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>
				{/* <div className="absolute bottom-[-1%] left-[-1%] h-[256px] w-[calc(1536px/6)] bg-[url('https://saicharan.dev/assets/girl-sprite.png')] scale-[0.5] origin-[left_bottom] animate-run"></div> */}
				<CounterItem
					title="Positive feedback"
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="%"
				/>
			</div>
		</div >
	);
}

export default AboutCounter;

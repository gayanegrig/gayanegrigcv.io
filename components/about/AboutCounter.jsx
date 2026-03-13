import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

function AboutCounter()
{
	const startYear = 2021;
	const currentYear = new Date().getFullYear();
	const experienceYears = currentYear - startYear;

	useCountUp({ ref: "experienceCounter", end: experienceYears, duration: 2 });
	useCountUp({ ref: "feedbackCounter", end: 92, duration: 2 });
	useCountUp({ ref: "projectsCounter", end: 90, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 shadow-sm relative">
			<div className="font-general-medium mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}

				/>
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
		</div>
	);
}

export default AboutCounter;
const CounterItem = ({ title, counter, measurement }) =>
{
	return (
		<div className="mb-20 p-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-e-full sm:mb-0">
			<h2 className="text-4xl text-center text-secondary-light mb-2">
				{counter} {measurement}
			</h2>
			<span className="font-general-regular block text-md text-center text-ternary-light">
				{title}
			</span>
		</div>
	);
};

export default CounterItem;

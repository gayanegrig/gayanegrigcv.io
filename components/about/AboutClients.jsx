import { clientsData, clientsHeading } from '../../data/clientsData';
import AboutClientSingle from './AboutClientSingle';

function AboutClients()
{
	const loopClients = [...clientsData, ...clientsData];

	return (
		<section className="w-full mt-16 sm:mt-24 overflow-hidden">
			<div className="text-center max-w-2xl mx-auto">
				<p className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-semibold">
					Trusted by
				</p>

				<h2 className="mt-3 font-general-medium text-3xl sm:text-4xl text-primary-dark dark:text-primary-light">
					{clientsHeading}
				</h2>

				<p className="mt-4 text-md sm:text-lg text-ternary-dark dark:text-ternary-light">
					Brands and clients I’ve worked with to build modern and user-friendly digital experiences.
				</p>
			</div>

			<div className="relative mt-12 sm:mt-16">

				<div className="marquee">
					<div className="marquee-track">
						{loopClients.map((client, index) => (
							<div
								key={`${client.id}-${index}`}
								className="marquee-item"
							>
								<AboutClientSingle
									title={client.title}
									image={client.img}
									id={client.id}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutClients;
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Projects from "../components/projects/project";
import AppBanner from "../components/shared/AppBanner";


export default function Home()
{

	return (
		<div className="container mx-auto">
			<section id="home">
				<AppBanner />
			</section>

			<section id="about">
				<About />
			</section>

			<section id="projects">
				<Projects />
			</section>

			<section id="contact">
				<Contact />
			</section>
		</div>
	);
}

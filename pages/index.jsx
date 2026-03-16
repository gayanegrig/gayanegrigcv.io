
import About from "../components/about";
import Contact from "../components/contact";
import AvatarScroll from "../components/AvatarScroll/AvatarScroll";
import Projects from "../components/projects";
import AppBanner from "../components/shared/AppBanner";


export default function Home()
{

	return (
		<div className="container mx-auto">
			<AvatarScroll />

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

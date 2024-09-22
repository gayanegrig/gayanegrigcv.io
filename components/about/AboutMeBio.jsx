import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';
import { Developer } from '../../public/images/assets.images';

function AboutMeBio()
{
	const [aboutMe] = useState(aboutMeData);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20 relative">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image
					src={Developer}
					width={200}
					height={200}
					className="rounded-lg"
					alt="Profile Image"
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}

				<div className="mt-6 flex justify-between">
					<a
						download="CV_Gayane_Grigoryan_Frontend_React_React_Native.pdf"
						href="/files/CV_Gayane_Grigoryan_Frontend_React_React_Native.pdf"
						className="text-blue-500 underline transition-transform duration-300 hover:scale-105"
					>
						Download CV
					</a>
					<a
						download="Gayane_React_JS_certificate.pdf"
						href="/files/Gayane_React_JS_certificate.pdf"
						className="text-blue-500 underline transition-transform duration-300 hover:scale-105"
					>
						Download Certificate
					</a>
				</div>
			</div>
		</div>
	);
}

export default AboutMeBio;

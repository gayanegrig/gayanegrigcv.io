import Image from 'next/image';
import { useRouter } from 'next/router';

function AboutClientSingle({ title, image, id })
{
	const router = useRouter();

	const handleProjectClick = () =>
	{
		router.push(`/projects/${id}`);
	};

	return (
		<div
			onClick={handleProjectClick}
			className="group h-28 sm:h-32 w-[180px] sm:w-[220px] rounded-2xl border border-ternary-light dark:border-ternary-dark bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-center px-6"
		>
			<div className="flex items-center justify-center w-full h-full">
				<Image
					src={image.src}
					alt={title}
					width={140}
					height={70}
					className="object-contain max-h-[55px] w-auto opacity-90 group-hover:opacity-100 transition duration-300"
				/>
			</div>
		</div>
	);
}

export default AboutClientSingle;
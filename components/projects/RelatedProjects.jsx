import { useEffect } from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';


function RelatedProjects()
{
	const [relatedProjectData, setRelatedProjectData] = useState()
	const router = useRouter();

	const fetchRelatedProjectData = async () =>
	{
		const response = await fetch('/api/related-projects');
		const data = await response.json();
		setRelatedProjectData(data);
	};


	useEffect(() =>
	{
		fetchRelatedProjectData();
	}, []);
	const handleProjectClick = (projectId) =>
	{
		router.push(`/projects/${projectId}`);
	};
	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{relatedProjectData?.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{relatedProjectData?.Projects.map((project) =>
				{
					return (
						<div key={project.id} className="cursor-pointer" onClick={() => handleProjectClick(project.id)}>
							<Image
								src={project.img}
								className="rounded-xl cursor-pointer"
								width="400"
								height="400"
								alt={project.title}
								key={project.id}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default RelatedProjects;

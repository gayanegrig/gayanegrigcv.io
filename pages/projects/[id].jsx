import Image from 'next/image';
import { FiTag } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../pages/api/data';
import RelatedProjects from '../../components/projects/RelatedProjects';

function ProjectSingle(props)
{
  if (!props.project)
  {
    return (
      <div className="container mx-auto">
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          Project not found.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <PagesMetaHead title={props.project?.title} />
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {props.project.ProjectHeader?.title}
        </p>
        <div className="flex">
          <div className="flex items-center">
            <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader?.tags}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {props.project.ProjectImages?.map((project) => (
          <div className="mb-10 sm:mb-0" key={project.id}>
            <Image
              src={project.img}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              alt={project?.title}
              layout="responsive"
              width={100}
              height={90}
            />
          </div>
        ))}
      </div>

      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              {props.project.ProjectInfo?.ClientHeading}
            </p>
            <ul className="leading-loose">
              {props.project.ProjectInfo?.CompanyInfo.map((info) => (
                <li className="font-general-regular text-white" key={info.id}>
                  <span className="text-white">{info?.title}: </span>
                  {info.title === 'Website' || info.title === 'Project Links' ? <a
                    href={info.details}
                    target="_blank"
                    className="bg-gradient-to-r bg-clip-text text-transparent  bg-gradient-to-r from-blue-500 to-violet-500"
                    aria-label={info.title}
                  >
                    {(info.title === 'Website' && 'Visit Company Web Page' || info.title === 'Project Links' && 'View Live Project')}
                  </a> : <span className="bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                    {info.details}
                  </span>}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo?.ObjectivesHeading}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {props.project.ProjectInfo?.ObjectivesDetails}
            </p>
          </div>

          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo?.Technologies[0]?.title}
            </p>
            <ul className="list-disc pl-5">
              {props.project.ProjectInfo?.Technologies[0]?.techs.map((tech, index) => (
                <li key={index} className="font-general-regular text-primary-dark dark:text-ternary-light">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {props.project.ProjectInfo?.ProjectDetailsHeading}
          </p>
          {props.project.ProjectInfo?.ProjectDetails.map((details) => (
            <p
              key={details.id}
              className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              {details.details}
            </p>
          ))}
        </div>
      </div>

      <RelatedProjects />
    </div>
  );
}

export async function getStaticPaths()
{
  const paths = projectsData.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params })
{
  const project = projectsData.find((project) => project.id === Number(params.id));

  return {
    props: {
      project,
    },
  };
}

export default ProjectSingle;

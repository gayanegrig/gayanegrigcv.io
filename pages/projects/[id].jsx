import Image from 'next/image';
import { FiTag } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../pages/api/hello';
import RelatedProjects from '../../components/projects/RelatedProjects';

function ProjectSingle(props) {
  // Graceful fallback if project data is not found
  if (!props.project) {
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
      <PagesMetaHead title={props.project.title} />
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

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {props.project.ProjectImages?.map((project) => (
          <div className="mb-10 sm:mb-0" key={project.id}>
            <Image
              src={project.img}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              alt={project.title}
              layout="responsive"
              width={100}
              height={90}
            />
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        {/* Left Side Info */}
        <div className="w-full sm:w-1/3 text-left">
          {/* Client Details */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              {props.project.ProjectInfo?.ClientHeading}
            </p>
            <ul className="leading-loose">
              {props.project.ProjectInfo?.CompanyInfo.map((info) => (
                <li
                  className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  key={info.id}
                >
                  <span>{info.title}: </span>
                  <a
                    href={info.details}
                    className={
                      info.title === 'Website' || info.title === 'Phone'
                        ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                        : ''
                    }
                    aria-label={`Project ${info.title}`}
                  >
                    {info.details}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Objectives */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo?.ObjectivesHeading}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {props.project.ProjectInfo?.ObjectivesDetails}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo?.Technologies[0].title}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {props.project.ProjectInfo?.Technologies[0].techs.join(', ')}
            </p>
          </div>

          {/* Social Sharing */}
          <div>
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo?.SocialSharingHeading}
            </p>
            {/* Uncomment when SocialSharing data is available */}
            {/* <div className="flex items-center gap-3 mt-5">
              {props.project.ProjectInfo?.SocialSharing.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="__blank"
                  aria-label="Share Project"
                  className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                >
                  <span className="text-lg lg:text-2xl">{social.icon}</span>
                </a>
              ))}
            </div> */}
          </div>
        </div>

        {/* Right Side Details */}
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

export async function getServerSideProps({ query }) {
  const { id } = query;
  const project = projectsData.find((project) => project.id === Number(id));

  // If project not found, return 404
  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
  };
}

export default ProjectSingle;

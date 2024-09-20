// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v4 as uuidv4 } from "uuid";

export const projectsData = [
  {
    id: 1,
    title: "Greenwaveiot",
    url: "greenwaveiot",
    category: "Web Application",
    img: "/images/web-Mockup.png",
    ProjectHeader: {
      title: "Greenwaveiot",
      tags: "Frontend Development",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Greenwaveiot",
        img: "/images/web-Mockup.png",
      },
      {
        id: uuidv4(),
        title: "Greenwaveiot",
        img: "/images/web-Mockup-1.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Greenwaveiot",
          details: "TenMileZone Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Web Development",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To create a seamless web application that enhances user engagement and supports business goals.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React js", "JavaScript", "Styled Components", "AdobeXD"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "The main challenge was to ensure responsive design while maintaining performance across devices.",
        },
        {
          id: uuidv4(),
          details:
            "Integrating various APIs and ensuring smooth data flow was crucial for the project's success.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Game QUIZ",
    url: "game-quiz",
    category: "Mobile Application",
    img: "/images/Mobile-App-Mockup.png",
    ProjectHeader: {
      title: "Game QUIZ",
      tags: ["Frontend Development", "Game Development"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Game QUIZ Interface",
        img: "/images/Mobile-App-Mockup.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Client",
          details: "Candy Wings Ltd",
        },
        {
          id: uuidv4(),
          title: "Services Provided",
          details: "Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://candywings.com",
        },
      ],
      ObjectivesHeading: "Project Objective",
      ObjectivesDetails:
        "To create an engaging quiz game that challenges users' knowledge across various topics.",

      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native",
            "JavaScript",
            "TypeScript",
            "Adobe XD",
            "Google Login",
            "Facebook Login",
          ],
        },
      ],

      ProjectDetailsHeading: "Project Challenges",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Designing a game that is both fun and educational, appealing to a wide audience.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Winter Park",
    url: "winter-park",
    category: "Mobile Application",
    img: "/images/ui-project-1.png",
    ProjectHeader: {
      title: "Winter Park",
      tags: ["Frontend Development", "Mobile App"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Winter Park UI",
        img: "/images/ui-project-1.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Company Name",
          details: "Locator CSJC",
        },
        {
          id: uuidv4(),
          title: "Services Provided",
          details: "Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.locator.am",
        },
      ],
      ObjectivesHeading: "Project Objective",
      ObjectivesDetails:
        "To develop a mobile application that enhances the user experience for planning winter sports activities.",

      Technologies: {
        title: "Tools & Technologies",
        techs: [
          "React Native",
          "JavaScript",
          "Firebase",
          "Figma",
          "Redux Toolkit",
          "Push Notifications",
          "Authentication (Firebase Auth)",
        ],
      },

      ProjectDetailsHeading: "Project Challenges",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Providing real-time updates while maintaining smooth UI performance in the app.",
        },
        {
          id: uuidv4(),
          details:
            "Integrating push notifications to alert users about weather conditions and updates.",
        },
        {
          id: uuidv4(),
          details:
            "Implementing secure user authentication with Firebase Auth.",
        },
        {
          id: uuidv4(),
          details:
            "Implementing automation workflows for app testing and continuous integration.",
        },
        {
          id: uuidv4(),
          details:
            "Ensuring offline support for users in remote areas with limited connectivity.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Meteo Technical Application",
    url: "meteo-tech-app",
    category: "Mobile Application",
    img: "/images/mobile-project-1.png",
    ProjectHeader: {
      title: "Meteo Technical Application",
      tags: ["Frontend Development", "Mobile App", "Real-Time Data"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Meteo Technical Application UI",
        img: "/images/mobile-project-1.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Client",
          details: "Locator CSJC",
        },
        {
          id: uuidv4(),
          title: "Services Provided",
          details: "Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.locator.am",
        },
      ],
      ObjectivesHeading: "Project Objective",
      ObjectivesDetails:
        "To develop a mobile application providing users with real-time weather updates and forecasts, personalized to their location.",

      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native",
            "TypeScript",
            "JavaScript",
            "Figma",
            "Redux Toolkit",
            "REST APIs",
            "Push Notifications",
          ],
        },
      ],
      ProjectDetailsHeading: "Project Challenges",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Aggregating data from multiple weather APIs while ensuring high accuracy and responsiveness.",
        },
        {
          id: uuidv4(),
          details:
            "Designing an intuitive user interface that presents complex meteorological data in a simplified and user-friendly format.",
        },
        {
          id: uuidv4(),
          details:
            "Implementing real-time push notifications to alert users of severe weather changes or updates.",
        },
        {
          id: uuidv4(),
          details:
            "Ensuring type safety and scalability of the codebase using TypeScript.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Barrier App",
    url: "barrier-app",
    category: "Mobile Application",
    img: "/images/web-project-1.png",
    ProjectHeader: {
      title: "Barrier App",
      tags: ["Frontend Development", "Mobile Safety"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Barrier App Interface",
        img: "/images/web-project-1.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Client",
          details: "Locator CJSC",
        },
        {
          id: uuidv4(),
          title: "Services Provided",
          details: "Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.locator.am",
        },
      ],
      ObjectivesHeading: "Project Objective",
      ObjectivesDetails:
        "To create a comprehensive application that provides safety measures and real-time alerts for users.",

      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native",
            "TypeScript",
            "JavaScript",
            "Figma",
            "Redux Toolkit",
            "REST APIs",
            "Push Notifications",
          ],
        },
      ],

      ProjectDetailsHeading: "Project Challenges",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Ensuring the app is responsive across various devices while providing accurate, real-time alerts.",
        },
        {
          id: uuidv4(),
          details:
            "Integrating push notifications for timely safety alerts to users.",
        },
        {
          id: uuidv4(),
          details:
            "Implementing type safety and maintainability using TypeScript.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "iMeter.am",
    url: "iMeter.am",
    category: "Web Application",
    img: "/images/mobile-project-3.png",
    ProjectHeader: {
      title: "iMeter.am",
      tags: ["Full Stack Development", "Home Automation"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "iMeter.am Interface",
        img: "/images/mobile-project-3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Client",
          details: "iMeter CJSC",
        },
        {
          id: uuidv4(),
          title: "Services Provided",
          details: "Full Stack Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://imeter.am",
        },
      ],
      ObjectivesHeading: "Project Objective",
      ObjectivesDetails:
        "To develop a home automation application that enhances user control over their home environment.",

      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Figma",
            "Node.js",
            "RESTful APIs",
          ],
        },
      ],

      ProjectDetailsHeading: "Project Challenges",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Ensuring seamless integration with various smart home devices and platforms.",
        },
        {
          id: uuidv4(),
          details:
            "Creating an intuitive user interface that simplifies complex automation tasks.",
        },
        {
          id: uuidv4(),
          details:
            "Implementing robust security measures to protect user data and device access.",
        },
      ],
    },
  },
  {
    id: 7,
    title: "Redro",
    url: "redro-app",
    category: "Mobile Application",
    img: "/images/ui-project-2.png",
    ProjectHeader: {
      title: "Redro",
      tags: ["Frontend Development"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Redro Application Interface",
        img: "/images/ui-project-2.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Client",
          details: "It Flame LLC",
        },
        {
          id: uuidv4(),
          title: "Services Provided",
          details: "Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://itflame.am/",
        },
      ],
      ObjectivesHeading: "Project Objective",
      ObjectivesDetails:
        "To develop a home automation application that enhances user control over their home environment.",

      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native",
            "Expo",
            "JavaScript",
            "TypeScript",
            "Redux Toolkit",
          ],
        },
      ],
      ProjectDetailsHeading: "Project Challenges",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Ensuring seamless integration with various smart home devices and platforms.",
        },
        {
          id: uuidv4(),
          details:
            "Designing an intuitive user interface that simplifies complex automation processes.",
        },
        {
          id: uuidv4(),
          details:
            "Implementing performance optimizations for a smooth user experience.",
        },
      ],
    },
  },
  {
    id: 8,
    title: "Geoquake App",
    url: "geoquake-app",
    category: "Mobile Application",
    img: "/images/web-project-2.png",
    ProjectHeader: {
      title: "Geoquake App",
      tags: ["Frontend Development", "Seismic Monitoring"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Geoquake App Interface",
        img: "/images/web-project-2.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Client",
          details: "Locator CJSC",
        },
        {
          id: uuidv4(),
          title: "Services Provided",
          details: "Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.locator.am",
        },
      ],
      ObjectivesHeading: "Project Objective",
      ObjectivesDetails:
        "To develop an application that provides real-time data on seismic activity, enhancing public awareness and safety.",

      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native",
            "JavaScript",
            "TypeScript",
            "Figma",
            "Redux Toolkit",
            "RESTful APIs",
            "Google Login",
            "Facebook Login",
            "Apple Pay",
            "Google Pay",
          ],
        },
      ],
      ProjectDetailsHeading: "Project Challenges",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Integrating multiple data sources to provide accurate and timely seismic data.",
        },
        {
          id: uuidv4(),
          details:
            "Designing a user-friendly interface that presents complex data in an understandable format.",
        },
        {
          id: uuidv4(),
          details:
            "Ensuring the app is responsive and performs well on various mobile devices.",
        },
        {
          id: uuidv4(),
          details:
            "Implementing secure and efficient authentication methods with Google and Facebook login.",
        },
        {
          id: uuidv4(),
          details:
            "Integrating payment options like Apple Pay and Google Pay for donations and premium features.",
        },
      ],
    },
  },
  {
    id: 9,
    title: "Car Number Scanner",
    url: "car-number-scanner",
    category: "Mobile Application",
    img: "/images/mobile-project-2.png",
    ProjectHeader: {
      title: "Car Number Scanner",
      tags: ["Mobile Application", "Image Recognition"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Car Number Scanner Interface",
        img: "/images/mobile-project-2.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Client",
          details: "Locator CJSC",
        },
        {
          id: uuidv4(),
          title: "Services Provided",
          details: "Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.locator.am",
        },
      ],
      ObjectivesHeading: "Project Objective",
      ObjectivesDetails:
        "To develop a user-friendly mobile application that accurately scans and recognizes car numbers.",

      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native",
            "JavaScript",
            "TypeScript",
            "Figma",
            "Image Recognition Libraries",
            "Redux Toolkit",
            "RESTful APIs",
          ],
        },
      ],

      ProjectDetailsHeading: "Project Challenges",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Achieving high accuracy in number recognition across various lighting and environmental conditions.",
        },
        {
          id: uuidv4(),
          details:
            "Designing an intuitive user interface that simplifies the scanning process for users.",
        },
      ],
    },
  },
];

export default function handler(req, res) {
  res.status(200).json(projectsData);
}

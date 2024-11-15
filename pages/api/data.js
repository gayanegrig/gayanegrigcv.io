import { v4 as uuidv4 } from "uuid";

import {
  webMockup,
  webMockup1,
  mobileAppMockup,
  uiProject1,
  mobileProject1,
  webProject1,
  mobileProject3,
  uiProject2,
  mobileProject2,
  Eldorado2,
  Eldorado3,
  Geoquake2,
  Geoquake3,
  Geoquake1,
  Eldorado4,
  mobileProject0,
  uiProject0,
} from "../../public/images/assets.images";

export const projectsData = [
  {
    id: 0,
    title: "Eldorado",
    url: "https://apps.apple.com/am/app/eldorado-armenia/id6714467772",
    category: "Mobile Application",
    img: Eldorado3,
    ProjectHeader: {
      title: "Eldorado",
      tags: ["Frontend Development"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Eldorado",
        img: Eldorado3,
      },
      {
        id: uuidv4(),
        title: "Eldorado",
        img: Eldorado2,
      },
      {
        id: uuidv4(),
        title: "Eldorado",
        img: Eldorado4,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Company",
          details: "ArmMage LLC",
        },
        {
          id: uuidv4(),
          title: "Services Provided",
          details: "Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.armmage.com/",
        },
        {
          id: uuidv4(),
          title: "Project Links",
          details: "https://apps.apple.com/am/app/eldorado-armenia/id6714467772",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:"The primary goal of the Eldorado mobile app was to create a smooth, engaging, and user-friendly shopping experience for users on mobile devices. The objective was to ensure effortless navigation and quick access to products, integrating advanced mobile-specific features such as push notifications and easy checkout processes. Additionally, the app was designed to support Eldorado's business objectives by enhancing customer engagement, streamlining the purchasing process, and offering a platform capable of growing with the company's future expansion and evolving customer needs.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native",
            "JavaScript",
            "TypeScript",
            "Redux Toolkit",
            "AsyncStorage",
            "React Navigation (Stack)",
            "Push Notifications",
            "GraphQL",
            "Payment(ARCA Payment System)",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details: 
            "One of the key challenges was ensuring that the mobile app maintained optimal performance across different device types and screen sizes, while offering a seamless experience for users. This required extensive testing to ensure responsive design and smooth interactions on both Android and iOS platforms."
        },
        {
          id: uuidv4(),
          details: 
            "Another challenge was to integrate and manage real-time data, especially for inventory management and product availability. Ensuring seamless synchronization between the app's backend and the mobile interface was critical to delivering a smooth user experience with minimal latency."
        },
        {
          id: uuidv4(),
          details: 
            "The integration of push notifications presented its own set of challenges, as we needed to personalize notifications without overwhelming the user. This was crucial to keeping users engaged without disrupting their app experience."
        },
        {
          id: uuidv4(),
          details: 
            "Additionally, optimizing the checkout process for mobile was essential. We focused on simplifying the user flow, integrating secure payment gateways, and minimizing the steps to complete a purchase, ensuring a frictionless transaction experience on mobile."
        },
      ],
    },
  },
  {
    id: 8,
    title: "Geoquake App",
    url: "geoquake-app",
    category: "Mobile Application",
    img: Geoquake1,
    ProjectHeader: {
      title: "Geoquake App",
      tags: ["Frontend Development"],
    },
    ProjectImages: [

      {
        id: uuidv4(),
        title: "Geoquake App Interface",
        img: Geoquake1,
      },   {
        id: uuidv4(),
        title: "Geoquake App Interface",
        img: Geoquake2,
      },   {
        id: uuidv4(),
        title: "Geoquake App Interface",
        img: Geoquake3,
      },
      
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Company",
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
        {
          id: uuidv4(),
          title: "Project Links",
          details: "https://apps.apple.com/am/app/geoquake/id6503453329",
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
            "Figma (UI/UX Design Collaboration) (UI/UX Design Collaboration)",
            "Redux Toolkit",
            "AsyncStorage",
            "React Navigation (Stack)",
            "Firebase (Cloud Messaging)",
            "Push Notifications",
            "RESTful APIs",
            "Axios (Data Fetching)",
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
    img: mobileProject0,
    ProjectHeader: {
      title: "Car Number Scanner",
      tags: ["Mobile Application"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Car Number Scanner Interface",
        img: mobileProject2,
      },
      {
        id: uuidv4(),
        title: "Car Number Scanner Interface",
        img: mobileProject0,
      },
      
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Company",
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
            "Figma (UI/UX Design Collaboration) (UI/UX Design Collaboration)",
            "Image Recognition Libraries",
            "Redux Toolkit",
            "RESTful APIs",
            "Axios (Data Fetching)",
            "React Navigation (Stack)",
            "Push Notifications",
            "Firebase (Cloud Messaging)",
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
  {
    id: 1,
    title: "Greenwaveiot",
    url: "greenwaveiot",
    category: "Web Application",
    img: webMockup,
    ProjectHeader: {
      title: "Greenwaveiot",
      tags: ["Frontend Development"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Greenwaveiot",
        img: webMockup,
      },
      {
        id: uuidv4(),
        title: "Greenwaveiot",
        img: webMockup1,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Company",
          details: "TenMileZone Ltd",
        },
        {
          id: uuidv4(),
          title: "Services Provided",
          details: "Web Development",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To create a seamless web application that enhances user engagement and supports business goals.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React js",
            "JavaScript",
            "Styled Components",
            "REST APIs",
            "AdobeXD",
          ],
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
    img: mobileAppMockup,
    ProjectHeader: {
      title: "Game QUIZ",
      tags: ["Frontend Development"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Game QUIZ Interface",
        img: mobileAppMockup,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Company",
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
          details: "https://www.candywings.com",
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
            "Redux Toolkit",
            "REST APIs",
            "Push Notifications",
            "Firebase (Cloud Messaging)",
            "React Navigation",
            "AsyncStorage",
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
    img: uiProject1,
    ProjectHeader: {
      title: "Winter Park",
      tags: ["Frontend Development"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Winter Park",
        img: uiProject1,
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

      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native",
            "TypeScript",
            "JavaScript",
            "Figma (UI/UX Design Collaboration) (UI/UX Design Collaboration)",
            "Redux Toolkit",
            "REST APIs",
            "Push Notifications",
            "Firebase (Authentication, Firestore, Cloud Messaging)",
            "React Navigation",
            "AsyncStorage",
          ],
        },
      ],

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
    img: mobileProject1,
    ProjectHeader: {
      title: "Meteo Technical Application",
      tags: ["Frontend Development"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Meteo Technical Application",
        img: mobileProject1,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Company",
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
            "Figma (UI/UX Design Collaboration) (UI/UX Design Collaboration)",
            "Redux Toolkit",
            "AsyncStorage",
            "REST APIs",
            "Push Notifications",
            "Firebase (Authentication, Firestore, Cloud Messaging)",
            "React Navigation",
            "React Native Reanimated",
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
    img: webProject1,
    ProjectHeader: {
      title: "Barrier App",
      tags: ["Frontend Development"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Barrier App Interface",
        img: webProject1,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Company",
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
            "Figma (UI/UX Design Collaboration) (UI/UX Design Collaboration)",
            "Redux Toolkit",
            "REST APIs",
            "Axios (Data Fetching)",
            "Push Notifications",
            "Firebase (Authentication, Firestore, Cloud Messaging)",
            "React Navigation (Stack)",
            "AsyncStorage",
            "React-Native Maps",
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
    img: mobileProject3,
    ProjectHeader: {
      title: "iMeter.am",
      tags: ["Full Stack Development"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "iMeter.am Interface",
        img: mobileProject3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Company",
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
          details: "https://www.imeter.am",
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
            "Figma (UI/UX Design Collaboration) (UI/UX Design Collaboration)",
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
    img: uiProject2,
    ProjectHeader: {
      title: "Redro",
      tags: ["Frontend Development"],
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Redro Application Interface",
        img: uiProject0,
      },
      {
        id: uuidv4(),
        title: "Redro Application Interface",
        img: uiProject2,
      },
      
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Company",
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
          details: "https://www.itflame.am/",
        },
        {
          id: uuidv4(),
          title: "Project Links",
          details: "https://play.google.com/store/apps/details?id=com.redro.app",
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
            "React Navigation (Stack, Tab, Drawer)",
            "AsyncStorage",
            "REST APIs",
            "Axios (Data Fetching)",
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

];

export default function handler(req, res) {
  res.status(200).json(projectsData);
}


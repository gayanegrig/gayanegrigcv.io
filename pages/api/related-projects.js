import { mobileAppMockup, mobileProject3, uiProject2, webMockup1 } from "../../public/images/assets.images";

 const RelatedProject = {
    title: "Related Projects",
    Projects: [
      {
        id: 7,
        title: "Mobile Application",
        img: uiProject2,
      },
      {
        id: 2,
        title: "Mobile Application",
        img: mobileAppMockup,
      },
      {
        id: 1,
        title: "Web Application",
        img: webMockup1,
      },
      {
        id: 6,
        title: "Mobile Application",
        img: mobileProject3,
      },
    ],
  };
  export default function handler(req, res) {
    res.status(200).json(RelatedProject);
  }
  
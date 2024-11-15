import { v4 as uuidv4 } from "uuid";
import { mobileAppMockup, mobileProject3, uiProject2, webMockup1 } from "../../public/images/assets.images";

 const RelatedProject = {
    title: "Related Projects",
    Projects: [
      {
        id: uuidv4(),
        title: "Mobile Application",
        img: uiProject2,
      },
      {
        id: uuidv4(),
        title: "Mobile Application",
        img: mobileAppMockup,
      },
      {
        id: uuidv4(),
        title: "Web Application",
        img: webMockup1,
      },
      {
        id: uuidv4(),
        title: "Mobile Application",
        img: mobileProject3,
      },
    ],
  };
  export default function handler(req, res) {
    res.status(200).json(RelatedProject);
  }
  
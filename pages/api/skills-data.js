 const skills = [

    { name: "Ionic", isPrimary: false },
    { name: "Angular", isPrimary: false },
    { name: "Cordova", isPrimary: false },
    { name: "JavaScript", isPrimary: true },
    { name: "TypeScript", isPrimary: true },
    { name: "React Native", isPrimary: true },
    { name: "React JS", isPrimary: false },
    { name: "Next JS", isPrimary: false },
    { name: "Redux", isPrimary: false },
    { name: "MobX", isPrimary: false },
    { name: "HTML", isPrimary: false },
    { name: "CSS", isPrimary: false },
    { name: "Tailwind CSS", isPrimary: false },
    { name: "Material-UI", isPrimary: false },
    { name: "Ant Design", isPrimary: false },
    { name: "Bootstrap", isPrimary: false },
    { name: "Sass", isPrimary: false },
    { name: "LESS", isPrimary: false },
    { name: "Styled Components", isPrimary: false },
    { name: "Git", isPrimary: false },
    { name: "WebSockets", isPrimary: false },
    { name: "GraphQL", isPrimary: false },
    { name: "RESTful APIs", isPrimary: false },
    { name: "CI/CD", isPrimary: false },
    { name: "JIRA", isPrimary: false },
    { name: "Trello", isPrimary: false },
  ];
  export default function handler(req, res) {
    res.status(200).json(skills);
  }

const contacts = [
    {
      id: 1,
      name: "Yerevan, Armenia",
      icon: 'FiMapPin' ,
      action:null,
    },
    {
      id: 2,
      name: "gayane.grigoryan.93.gg@gmail.com",
      icon: 'FiMail' ,
      action: () =>
        (window.location.href = "mailto:gayane.grigoryan.93.gg@gmail.com"),
    },
    {
      id: 3,
      name: "+374 93 119983",
      icon: 'FiPhone' ,
      action: () => (window.location.href = "tel:+37493119983"),
    },
  ];
  export default function handler(req, res) {
    res.status(200).json(contacts);
  }
  
  
const contacts = [
  {
    id: 1,
    name: "Yerevan, Armenia",
    icon: "FiMapPin",
    action: "https://maps.google.com/?q=Yerevan,Armenia",
  },
  {
    id: 2,
    name: "gayane.grigoryan.93.gg@gmail.com",
    icon: "FiMail",
    action: "mailto:gayane.grigoryan.93.gg@gmail.com",
  },
  {
    id: 3,
    name: "+374 93 119983",
    icon: "FiPhone",
    action: "tel:+37493119983",
  },
];

export default function handler(req, res) {
  res.status(200).json(contacts);
}
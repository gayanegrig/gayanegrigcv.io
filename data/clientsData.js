import { v4 as uuidv4 } from "uuid";

// Import images
import EldoradoImage from "../public/images/brands/eldorado.png";
import GeoquakeImage from "../public/images/brands/geoquake.png";
import BeloteClubImage from "../public/images/brands/beloteClub.png";
import WinterParkImage from "../public/images/brands/winter_park.png";
import RedroImage from "../public/images/brands/redro.png";
import CandyWingsImage from "../public/images/brands/candywings.png";
import ImeterImage from "../public/images/brands/imeter.png";

export const clientsHeading = "Some of the brands I worked with";

export const clientsData = [
  {
    id: uuidv4(),
    title: "Eldorado",
    img: EldoradoImage,
  },
  {
    id: uuidv4(),
    title: "Geoquake",
    img: GeoquakeImage,
  },
  {
    id: uuidv4(),
    title: "Belote Club",
    img: BeloteClubImage,
  },
  {
    id: uuidv4(),
    title: "Winter Park",
    img: WinterParkImage,
  },
  {
    id: uuidv4(),
    title: "Redro",
    img: RedroImage,
  },
  {
    id: uuidv4(),
    title: "Candy Wings",
    img: CandyWingsImage,
  },
  {
    id: uuidv4(),
    title: "Imeter",
    img: ImeterImage,
  },
];

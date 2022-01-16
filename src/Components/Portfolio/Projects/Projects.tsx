import { Pageview } from "@material-ui/icons";
import { IProject } from "../Interfaces";
import Continuo1 from "./Assets/Continuo1.png";
import Continuo2 from "./Assets/Continuo2.png";
import Continuo3 from "./Assets/Continuo3.png";

const projects: IProject[] = [
  {
    images: [
      { alt: "login", image: Continuo1 },
      { alt: "DashBoard", image: Continuo2 },
      { alt: "loading", image: Continuo3 },
    ],
    description: {
      title: "Continuo",
      description:
        "Administration and financial management web application created for the market of the Dominican Republic.",
    },
    links: [
      {
        title: "Visit Page",
        link: "https://www.continuo.com.do",
        icon: <Pageview />,
      },
    ],
  },
];

export default projects;

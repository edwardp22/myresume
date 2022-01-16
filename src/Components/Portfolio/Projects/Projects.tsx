import { Pageview } from "@material-ui/icons";
import { IProject } from "../Interfaces";
import Continuo1 from "./Assets/Continuo1.png";
import Continuo2 from "./Assets/Continuo2.png";
import Continuo3 from "./Assets/Continuo3.png";
import DB1 from "./Assets/DB1.png";
import DB2 from "./Assets/DB2.png";
import DB3 from "./Assets/DB3.png";

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
  {
    images: [
      { alt: "tables", image: DB1 },
      { alt: "views", image: DB2 },
      { alt: "login", image: DB3 },
    ],
    description: {
      title: "Personal SQL Server Example DB",
      description: `Example DB showing managing and developing skills in SQL Server. 
      
Server: edwardpena.database.windows.net 
User: readonlyuser 
password: TestUser123*`,
    },
    links: [],
  },
];

export default projects;

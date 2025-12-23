import { Icon } from "./Icon";
import "../styles/components/objectsGrid.css";
import JavaScript from "../assets/icons/stackIcons/JavaScript.png";
import Flutter from "../assets/icons/stackIcons/Flutter.png";
import Dart from "../assets/icons/stackIcons/Dart.png";
import NodeJS from "../assets/icons/stackIcons/NodeJS.png";
import Postman from "../assets/icons/stackIcons/Postman.png";
import Python from "../assets/icons/stackIcons/Python.png";
import ReactJS from "../assets/icons/stackIcons/ReactJS.png";
import SQL from "../assets/icons/stackIcons/SQL.png";
import expressJS from "../assets/icons/stackIcons/expressJS.png";
import GitHub from "../assets/icons/stackIcons/GitHub.png";
import MongoDB from "../assets/icons/stackIcons/MongoDB.png";


export const MyStackWindow = () => {
  const objects = [
    { name: "Java Script", icon: JavaScript },
    { name: "React", icon: ReactJS },
    { name: "Node.js", icon: NodeJS },
    { name: "Express", icon: expressJS },
    { name: "Flutter", icon: Flutter },
    { name: "Dart", icon: Dart },
    { name: "Python", icon: Python },
    { name: "SQL", icon: SQL },
    { name: "MongoDB", icon: MongoDB },
    { name: "Postman", icon: Postman },
    { name: "GitHub", icon: GitHub },
  ];

  return (
    <div className="stack-grid">
      {objects.map(obj => (
        <Icon
          key={obj.name}
          name={obj.name}
          img={obj.icon}
        />
      ))}
    </div>
  );
};
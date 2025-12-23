import "../styles/components/objectsGrid.css";
import "../styles/components/ProjectsWindow.css";
import vertix from "../assets/icons/vertixIcon.png";
import fitnet from "../assets/icons/fitnetIcon.png";
import fitnetImg from "../assets/images/fitnet.jpeg"
import vertixImg from "../assets/images/vertix.png";
import github from "../assets/icons/github.png";
import { Icon } from "./Icon";
import { ProjectFile } from "./ProjectFile";
import { useState } from "react";


export const ProjectsWindow = () => {
  const projects = [
    {
      name: "Vertix",
      title: "Social Youth Platform",
      icon: vertix,
      img: vertixImg,
      codeLink: "https://github.com/yael3259",
      videoLink: "https://www.youtube.com/watch?v=-vJlisNq_Fs&t=11s",
      description: "Developed a youth goal-tracking platform with automated daily updates (Cron Job), resolving scheduling issues through rigorous testing and optimization. Implemented client-side real-time notifications (React Context/ useEffect) to reduce server load and speed the UI. scaled an MVP into upgraded app. Key features: Post feed, notifications, user profiles, friend tracking, supportive community and more.",
      stackList: ["React", "CSS", "Node.js", "Express", "Cron Job", "JWT", "Python/Flask", "MongoDB"]
    },
    {
      name: "FitNet",
      title: "Online Fitness Store",
      icon: fitnet,
      img: fitnetImg,
      codeLink: "https://github.com/yael3259",
      videoLink: "https://www.youtube.com/watch?v=Jn49OQyhvmw",
      liveLink: "https://fitnet-site.vercel.app/",
      description: "Developed an online fitness sales platform. This final project was the first one I developed from scratch, and during the coding I learned a lot about independent thinking and problem solving.",
      stackList: ["React", "CSS", "Node.js", "Express", "MongoDB"]
    }
  ];

  const [openProjects, setOpenProjects] = useState([]);

  const handleOpenProjectWindow = (name) => {
    if (!openProjects.includes(name)) {
      setOpenProjects(prev => [...prev, name]);
    }
  };

  const handleCloseProjectWindow = (name) => {
    setOpenProjects(prev => prev.filter(n => n !== name));
  };

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <Icon
          key={project.name}
          name={project.name}
          img={project.icon}
          onDoubleClick={() => handleOpenProjectWindow(project.name)}
        />
      ))}

      <Icon
        name={"GitHub"}
        img={github}
        onDoubleClick={() => window.open("https://github.com/yael3259", "_blank")}
      />

      {projects.map((project, index) =>
        openProjects.includes(project.name) && (
          <ProjectFile
            key={project.name}
            project={project}
            onClose={() => handleCloseProjectWindow(project.name)}
            style={{ top: 100 + index * 40, left: 100 + index * 40 }}
          />
        )
      )}
    </div>
  );
};

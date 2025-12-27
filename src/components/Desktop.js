import "../styles/components/Desktop.css";
import { useState, useEffect } from "react";
import { Window } from "./Window";
import { Icon } from "./Icon";
import { READMEWindow } from "./READMEWindow";
import { ProjectsWindow } from "./ProjectsWindow";
import { GamesWindow } from "./GamesWindow";
import { ContactWindow } from "./ContactWindow";
import { RecycleBinWindow } from "./RecycleBinWindow";
import { MyStackWindow } from "./MyStackWindow";
import contact from "../assets/icons/contact.png";
import my_stack from "../assets/icons/my_computer.png";
import readme_file from "../assets/icons/readme_file.png";
import recycle_bin from "../assets/icons/recycle_bin.png";
import projects_folder from "../assets/icons/projects_folder.png";
import games from "../assets/icons/game_freecell-2.png";
import start_icon from "../assets/icons/start.png";
import sound_Icon from "../assets/icons/sound_Icon.png";



export const Desktop = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [openWindows, setOpenWindows] = useState([{ type: "README" }]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const icons = [
    { name: "Recycle Bin", img: recycle_bin },
    { name: "My Stack", img: my_stack },
    { name: "Projects", img: projects_folder },
    { name: "Games", img: games },
    { name: "Contact", img: contact },
    { name: "README", img: readme_file },
  ];

  const windowContentByType = {
    "Projects": <ProjectsWindow />,
    "Games": <GamesWindow />,
    "Contact": <ContactWindow />,
    "Recycle Bin": <RecycleBinWindow />,
    "My Stack": <MyStackWindow objectsCount={11} />
  };

  const objectsCountByType = {
    "Projects": 3,
    "Games": 2,
    "Contact": 6,
    "Recycle Bin": 4,
    "My Stack": 11
  };

  const handleOpenWindow = (icon) => {
    setOpenWindows(prev => {
      if (prev.some(w => w.type === icon.name))
        return prev;
      return [...prev, { type: icon.name }];
    });
  };

  const handleCloseWindow = (type) => {
    setOpenWindows(prev => prev.filter(win => win.type !== type));
  };

  return (
    <div className="desktop">
      {icons.map(icon => (
        <Icon
          key={icon.name}
          name={icon.name}
          img={icon.img}
          onDoubleClick={() => handleOpenWindow(icon)}
        />
      ))}

      {openWindows.map(win =>
        win.type === "README" ? (
          <READMEWindow
            key="README"
            onClose={() => handleCloseWindow("README")}
          />
        ) : (
          <Window
            key={win.type}
            title={win.type}
            objectsCount={objectsCountByType[win.type]}
            onClose={() => handleCloseWindow(win.type)}
          >
            {windowContentByType[win.type] || <div>Loading objects..</div>}
          </Window>
        )
      )}

      <div className="taskbar">
        <button className="taskbar-start-button">
          <img src={start_icon} alt="Start" className="start-icon" />
          <span>Start</span>
        </button>

        {openWindows.map(win => {
          const icon = icons.find(i => i.name === win.type);
          if (!icon) return null;

          return (
            <button key={win.type} className="taskbar-window-button">
              <img src={icon.img} alt={icon.name} className="window-icon" />
              <span>{icon.name}</span>
              <span
                className="close-x"
                onClick={() => handleCloseWindow(win.type)}
              >
                ✕
              </span>
            </button>
          );
        })}

        <div className="taskbar-time-area">
          <img src={sound_Icon} className="sound_icon" alt="sound" />
          <span className="time-text">
            {currentTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </span>
        </div>
      </div>
    </div>
  );
};
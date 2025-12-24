import "../styles/components/ProjectFile.css";
import youtube from "../assets/icons/youtube.png";
import google from "../assets/icons/google.png"
import github from "../assets/icons/github.png"


export const ProjectFile = ({ project, onClose }) => {
    const { name, title, img, description, stackList, codeLink, videoLink, liveLink } = project;

    return (
        <div className="window project-window">
            <div className="title-bar">
                <span>{name}</span>
                <button onClick={onClose}>✕</button>
            </div>

            <div className="content project-content">
                {img && <img src={img} alt={name} className="project-img" />}

                <div className="project-title">
                    {name} - {title}
                </div>

                {description && <p>{description}</p>}

                {stackList && stackList.length > 0 && (
                    <ul>
                        {stackList.map((tech) => (
                            <li key={tech} className="single-tech">{tech}</li>
                        ))}
                    </ul>
                )}

                <div className="project-links">
                    {codeLink && (
                        <div className="link-container">
                            <img src={github} className="link-logo" alt="githubLogo" />
                            <a href={codeLink} target="_blank" rel="noopener noreferrer">
                                Code in GitHub
                            </a>
                        </div>
                    )}
                    <br />
                    {videoLink && (
                        <div className="link-container">
                            <img src={youtube} className="link-logo" alt="youtubeLogo" />
                            <a href={videoLink} target="_blank" rel="noopener noreferrer">
                                YouTube Demo
                            </a>
                        </div>
                    )}
                    <br />
                    {liveLink && (
                        <div className="link-container">
                            <img src={google} className="link-logo" alt="googleLogo" />
                            <a href={liveLink} target="_blank" rel="noopener noreferrer">
                                Live Demo
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

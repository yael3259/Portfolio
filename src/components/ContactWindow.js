import { Icon } from "../components/Icon";
import "../styles/components/objectsGrid.css";
import linkedin from "../assets/icons/linkedin.png";
import whatsapp from "../assets/icons/whatsapp.png";
import youtube from "../assets/icons/youtube.png";
import github from "../assets/icons/github.png";
import gmail from "../assets/icons/gmail.png";
import CV from "../assets/icons/downloadCV.jpg";
import CV_File from "../assets/files/CV_file.pdf";


export const ContactWindow = () => {
  const cv = {
    name: "Download My CV",
    img: CV,
  }

  const contactFiles = [
    {
      name: "Gmail",
      img: gmail,
      link: "mailto:yael3259@gmail.com"
    },
    {
      name: "Whatsapp",
      img: whatsapp,
      link: "https://wa.me/972548704450"
    },
    {
      name: "LinkedIn",
      img: linkedin,
      link: "https://www.linkedin.com/in/yaelram/"
    },
    {
      name: "GitHub",
      img: github,
      link: "https://github.com/yael3259"
    },
    {
      name: "YouTube",
      img: youtube,
      link: "https://www.youtube.com/@yaelram_programing"
    },
  ]

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV_File;
    link.download = "Yael_Ram_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contact-grid">
      {contactFiles.map((item) => {
        return <Icon
          key={item.name}
          name={item.name}
          img={item.img}
          onDoubleClick={() => window.open(item.link, "_blank")}
        />
      })}
      <Icon
        name={cv.name}
        img={cv.img}
        onDoubleClick={handleDownloadCV}
      />
    </div>
  )
}

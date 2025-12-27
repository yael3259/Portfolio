import "../styles/components/objectsGrid.css";
import { useState, useEffect } from "react";
import { Icon } from "./Icon";
import { WarningAlert } from "./WarningAlert";
import donation from "../assets/icons/donation.png";
import menu from "../assets/icons/menu.png";
import dog from "../assets/icons/dog.png";
import cake from "../assets/icons/cake.png";


export const RecycleBinWindow = () => {
  const [showWarning, setShowWarning] = useState(false);

  const contactFiles = [
    {
      name: "Donation Website",
      img: donation,
      link: "https://donationscampaign.vercel.app/"
    },
    {
      name: "Pet Game",
      img: dog,
      link: "https://my-pet-game1.vercel.app/"
    },
    {
      name: "Cake Ordering Website",
      img: cake,
      link: "https://cake-ordering-website.vercel.app/"
    },
    {
      name: "Digital Restaurant Menu",
      img: menu,
      link: "https://digital-restaurant-menu-two.vercel.app/"
    }]

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarning(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseWarning = () => {
    setShowWarning(false);
  }

  return (
    <div className="contactFiles-grid">
      {showWarning && <WarningAlert
        message={<>
          These are my very first projects; messy, quirky, and definitely not for recruiters..<br />
          Totally safe to explore, purely for nostalgia and laughs :)
        </>}
        onClose={handleCloseWarning} />}

      {contactFiles.map((object) => {
        return <Icon
          name={object.name}
          img={object.img}
          onDoubleClick={() => window.open(object.link, "_blank")}
        />
      })}
    </div>
  )
}

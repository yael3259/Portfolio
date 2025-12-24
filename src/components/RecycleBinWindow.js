import Icon from "../components/Icon";
import donation from "../assets/icons/donation.png";
import menu from "../assets/icons/menu.png";
import dog from "../assets/icons/dog.png";
import cake from "../assets/icons/cake.png";


export const RecycleBinWindow = () => {
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

  return (
    <div>RecycleBinWindow</div>
  )
}

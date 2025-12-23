import "../styles/components/objectsGrid.css";
import { Icon } from "./Icon";
import XO from "../assets/icons/XO.png"
import eggTimer from "../assets/icons/timer.png";


export const GamesWindow = () => {
  return (
    <div className="games-grid">
      <Icon
        name={"Egg Timer"}
        img={eggTimer}
        onDoubleClick={() => window.open("https://eggtimerapp.vercel.app/", "_blank")}
      />
      <Icon
        name={"Tic Tac Toe"}
        img={XO}
        onDoubleClick={() => window.open("https://xo-game-lac.vercel.app/", "_blank")}
      />
    </div>
  )
}
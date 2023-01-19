import "../styles/Astronaut.scss";
import astroDuck from "../assets/duckastro.png";

function Astronaut(props) {
  const astronaut = props.astronaut;
  return (
    <div className="Astronaut">
      <div className="picture">
        <img className="img" alt="" src={astroDuck}></img>
      </div>
      <div>{astronaut.name}</div>
    </div>
  );
}

export default Astronaut;

import "../styles/Astronaut.scss";
import astroDuck from "../assets/duckastro.png";
import pen from "../assets/pen-47.svg";
import cross from "../assets/cross-23.svg";
import check from "../assets/check.svg";
import { useState } from "react";

function Astronaut(props) {
  const astronaut = props.astronaut;
  const [isChange, setIsChange] = useState(false);
  const [inputValue, setInputValue] = useState({
    firstName: astronaut.firstName,
    lastName: astronaut.lastName,
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setInputValue({
      ...inputValue,
      [evt.target.name]: value,
    });
  }

  function validateInput() {
    const regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    if (
      isChange &&
      regex.test(inputValue.firstName) &&
      regex.test(inputValue.lastName)
    ) {
      props.updateAstronaut(astronaut._id, inputValue);
      setIsChange(false);
    } else {
      alert(
        "Veuillez entrer un prénom et un nom valide ( minimum trois lettres )"
      );
    }
  }

  return (
    <div className="Astronaut">
      <div className="picture">
        <img className="img" alt="" src={astroDuck}></img>
      </div>

      {isChange ? (
        <div className="info input">
          <input
            type="text"
            name="firstName"
            placeholder="Prénom"
            value={inputValue.firstName}
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="lastName"
            placeholder="Nom"
            value={inputValue.lastName}
            onChange={handleChange}
          ></input>
          <img onClick={() => validateInput()} alt="" src={check}></img>
        </div>
      ) : (
        <div
          title={astronaut.firstName + " " + astronaut.lastName}
          className="info"
        >
          {astronaut.firstName} {astronaut.lastName}
        </div>
      )}

      <div className="options-block">
        <img
          onClick={() => setIsChange(!isChange)}
          className="pen"
          alt=""
          src={pen}
        ></img>
        <img
          onClick={() => props.deleteAstronaut(astronaut._id)}
          className="cross"
          alt=""
          src={cross}
        ></img>{" "}
      </div>
    </div>
  );
}

export default Astronaut;

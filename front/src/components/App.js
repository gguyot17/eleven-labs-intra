import "../styles/App.scss";
import Astronaut from "./Astronaut";
import { useState, useEffect } from "react";
import user from "../assets/user.svg";
import check from "../assets/check.svg";
import * as astronautService from "../services/astronaut.service";

function App() {
  const [astronauts, setAstronauts] = useState([]);

  const [reloadAstronauts, setReload] = useState(0);

  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
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
    if (regex.test(inputValue.firstName) && regex.test(inputValue.lastName)) {
      setReload(false);
      astronautService.addAstronaut(inputValue).then(() => {
        setReload(true);
      });

      setInputValue({
        firstName: "",
        lastName: "",
      });
    } else {
      alert(
        "Veuillez entrer un prénom et un nom valide ( minimum trois lettres )"
      );
    }
  }

  // const test = prompt("qdqdqw", "dqwd");

  function handleUpdateAstronaut(id, payload) {
    setReload(false);
    astronautService.updateAstronaut(id, payload).then((data) => {
      setReload(true);
    });
  }

  function handleDeleteAstronaut(id) {
    setReload(false);
    astronautService.deleteAstronaut(id).then((data) => {
      setReload(true);
    });
  }

  useEffect(() => {
    astronautService.getAstronauts().then((data) => {
      setAstronauts(data);
    });
  }, [reloadAstronauts]);

  return (
    <div className="App">
      <div className="header">
        <span>Liste d'astronautes</span>
      </div>
      <div className="list">
        <div className="Astronaut">
          <div className="picture">
            <img className="img" alt="" src={user}></img>
          </div>
          <div className="info input">
            <input
              placeholder="Prénom"
              type="text"
              name="firstName"
              value={inputValue.firstName}
              onChange={handleChange}
            ></input>
            <input
              placeholder="Nom"
              type="text"
              name="lastName"
              value={inputValue.lastName}
              onChange={handleChange}
            ></input>
            <img onClick={() => validateInput()} alt="" src={check}></img>
          </div>
        </div>

        {astronauts.map((astronaut) => {
          return (
            <Astronaut
              key={astronaut._id}
              astronaut={astronaut}
              updateAstronaut={handleUpdateAstronaut}
              deleteAstronaut={handleDeleteAstronaut}
            ></Astronaut>
          );
        })}
      </div>
    </div>
  );
}

export default App;

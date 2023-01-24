import "../styles/App.scss";
import Astronaut from "./Astronaut";
import { useState, useEffect } from "react";
import user from "../assets/user.svg";
import check from "../assets/check.svg";

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
      addAstronaut(inputValue);
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

  function addAstronaut(payload) {
    setReload(false);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    fetch("http://localhost:8080/astronauts", requestOptions)
      .then(() => {
        setReload(true);
      })
      .catch((e) => console.log(e));
  }

  function updateAstronaut(id, payload) {
    setReload(false);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    fetch("http://localhost:8080/astronauts/" + id, requestOptions)
      .then((data) => {
        console.log(data);
        setReload(true);
      })
      .catch((e) => console.log(e));
  }

  function deleteAstronaut(id) {
    setReload(false);
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:8080/astronauts/" + id, requestOptions)
      .then((data) => {
        console.log(data, reloadAstronauts);
        setReload(true);
        console.log(reloadAstronauts);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    console.log("GET");
    fetch("http://localhost:8080/astronauts", requestOptions)
      .then((response) => response.json())
      .then((data) => setAstronauts(data))
      .catch((e) => console.log(e));
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
              updateAstronaut={updateAstronaut}
              deleteAstronaut={deleteAstronaut}
            ></Astronaut>
          );
        })}
      </div>
    </div>
  );
}

export default App;

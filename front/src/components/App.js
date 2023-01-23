import "../styles/App.scss";
import Astronaut from "./Astronaut";
import { useState, useEffect } from "react";
import user_plus from "../assets/user-plus.svg";

function App() {
  const [astronauts, setAstronauts] = useState([]);

  const [reloadAstronauts, setReload] = useState(0);

  // const test = prompt("qdqdqw", "dqwd");

  function addAstronaut() {
    setReload(false);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName: "Gabin", lastName: "Guyot" }),
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
        <img
          alt=""
          src={user_plus}
          onClick={() => addAstronaut(astronauts)}
        ></img>
      </div>
      <div className="list">
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

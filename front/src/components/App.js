import "../styles/App.scss";
import Astronaut from "./Astronaut";

function addAstronaut() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName: "Gabin", lastName: "Guyot" }),
  };
  fetch("http://localhost:8080/astronauts", requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function getAstronauts() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  fetch("http://localhost:8080/astronauts", requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function App() {
  const astronauts = [
    { id: 1, name: "Astronaut" },
    { id: 2, name: "Astronaut chien" },
    { id: 3, name: "Astronaut chat" },
    { id: 4, name: "Astronaut singe" },
  ];

  return (
    <div className="App">
      <div className="list">
        {astronauts.map((astronaut) => {
          return <Astronaut key={astronaut.id} astronaut={astronaut} />;
        })}
      </div>

      <div onClick={() => addAstronaut()}>Add</div>
      <div onClick={() => getAstronauts()}>egt</div>
    </div>
  );
}

export default App;

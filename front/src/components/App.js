import "../styles/App.scss";
import Astronaut from "./Astronaut";

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
    </div>
  );
}

export default App;

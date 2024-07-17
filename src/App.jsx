import { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const generateJoke = async () => {
    const res = await fetch(
      "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
    );
    const jokeObj = await res.json();
    setJoke(jokeObj.joke);
  };
  return (
    <>
      <div>
        <h1>Joke Generator using React and jokeAPI</h1>
        <button onClick={generateJoke}>Click to Generate a Joke</button>
        <p className="jokeCont">" {joke} "</p>
      </div>
    </>
  );
}

export default App;

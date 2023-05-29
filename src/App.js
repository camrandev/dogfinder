import "./App.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import RoutesList from "./RoutesList";

function App() {
  const [dogs, setDogs] = useState(null);

  async function getDogs() {
    const response = await fetch("http://localhost:5001/dogs");
    const data = await response.json();
    setDogs(data);
  }

  if (!dogs) {
    getDogs();
    return <h1>Loading....</h1>;
  }

  function getDogNames(dogs) {
    return dogs.map(d => d.name)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={getDogNames(dogs)}/>
        <RoutesList dogs={dogs}/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

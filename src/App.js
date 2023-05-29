import "./App.css";
import React, { useState } from "react";

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

  return (
    <div className="App">
      <h1>hi</h1>
      {/* <Nav/>
      <Routes/> */}
    </div>
  );
}

export default App;

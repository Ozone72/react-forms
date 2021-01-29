import React, { useState } from "react";

function App() {
  const [headingTxt, setHeadingTxt] = useState("Hello");
  const [buttCol, setButtCol] = useState(false);

  function handleClick() {
    setHeadingTxt("Orin");
  }

  function handleMouseOver() {
    setButtCol(true);
  }

  function handleMouseOut() {
    setButtCol(false);
  }

  return (
    <div className="container">
      <h1>{headingTxt}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: buttCol ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

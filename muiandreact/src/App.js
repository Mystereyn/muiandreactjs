import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MyPict from "./Picts/myPict.jpg";

import React from "react";

function App() {
  return (
    <div className="App">
      <div className= "btn">
          <Button variant="contained"> 
              this is a contained Button
          </Button>
      </div>
      <div className="img">
        <img src={MyPict} 
            height="50%" 
            alt="myPict" 
            width="50%">
        </img>
      </div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
    </div>
  );
}

export default App;

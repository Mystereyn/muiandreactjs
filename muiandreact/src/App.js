
import MyPict from "./Picts/myPict.jpg";

import React from "react";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="img">
        <img src={MyPict} 
            height="50%" 
            alt="myPict" 
            width="50%">
        </img>
      </div>
      {/* This is Footer.jsx */}
      <div className="Footer">
          <Footer/>
      </div>
    </div>
  );
}

export default App;

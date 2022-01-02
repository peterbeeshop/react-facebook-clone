import React from "react";
import "./app.css";
import LeftSide from "./components/left/LeftSide";
import Middle from "./components/middle/Middle";
import RightSide from "./components/right/RightSide";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <section>
        <LeftSide />
        <Middle />
        <RightSide />
      </section>
    </div>
  );
};

export default App;

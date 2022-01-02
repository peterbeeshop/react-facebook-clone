import React from "react";
import ReactDom from "react-dom";
import App from "./app";

const Index = () => {
  return (
    <div className="App">
      <App />
    </div>
  );
};

ReactDom.render(<Index />, document.getElementById("root"));

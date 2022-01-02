import React from "react";
import "./story.css";
import myImage from "../navbar/pb.jpg";
function Story() {
  return (
    <div className="my__story">
      <div className="logo__image">
        <img src={myImage} alt="logoImage" />
        <b>some text</b>
      </div>
    </div>
  );
}

export default Story;

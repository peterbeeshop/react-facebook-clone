import React from "react";
import "./middle.css";
import myImage from "../right/image.jpg";
import nft from "../right/nft.jpg";
import Story from "../story/Story";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
function Middle() {
  return (
    <div className="middle">
      <div className="story">
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
      <div className="onyour__mind">
        <div>
          <img src={myImage} alt="dfs" />
          <input type="text" placeholder="whats on your mind, Peter ?" />
        </div>
        <hr
          style={{ width: "90%", margin: "8px auto", borderBottom: " 1px" }}
        />
        <div className="options">
          <section>
            <VideoCallIcon sx={{ color: "red" }} fontSize="medium" />
            <span>Live Video</span>
          </section>
          <section>
            <PhotoLibraryIcon sx={{ color: "green" }} fontSize="medium" />
            <span>Photo/video</span>
          </section>
          <section>
            <InsertEmoticonIcon sx={{ color: "yellow" }} fontSize="medium" />
            <span>Feeling/activity</span>
          </section>
        </div>
      </div>
      <div className="room">
        <div className="create__room">
          <VideoCallIcon fontSize="large" className="createroom__icon" />
          <h3>Peter's Room</h3>
          <span>Get started</span>
          <button>Create</button>
        </div>
        <div className="create__room">
          <img src={nft} alt="nft" />
          <span>Name goes here</span>
          <button>Say hi!</button>
        </div>
      </div>
    </div>
  );
}

export default Middle;

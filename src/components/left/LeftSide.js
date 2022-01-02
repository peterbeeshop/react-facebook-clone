import React from "react";
import myImage from "../navbar/pb.jpg";
import "./LeftSide.css";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import HistoryIcon from "@mui/icons-material/History";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function LeftSide() {
  return (
    <div className="left__side">
      <div className="leftDiv">
        <img src={myImage} alt="myImage" />
        <span>Peter B Muyambango</span>
      </div>
      <div className="leftDiv">
        <PeopleIcon fontSize="large" color="primary" />
        <span>Friends</span>
      </div>
      <div className="leftDiv">
        <GroupsIcon fontSize="large" sx={{ color: "#45AAF9" }} />
        <span>Groups</span>
      </div>
      <div className="leftDiv">
        <StorefrontIcon fontSize="large" sx={{ color: "#53C2DC" }} />
        <span>Marketplace</span>
      </div>
      <div className="leftDiv">
        <LiveTvIcon fontSize="large" sx={{ color: "#53C2DC" }} />
        <span>Watch</span>
      </div>
      <div className="leftDiv">
        <HistoryIcon fontSize="large" sx={{ color: "#53C2DC" }} />
        <span>Memories</span>
      </div>
      <div className="leftDiv">
        <ArrowDropDownRoundedIcon fontSize="large" />
        <span>See More</span>
      </div>
      <hr style={{ width: "90%", borderBottom: " 1px" }} />
      <h4>Your Shortcuts</h4>
      <div className="leftDiv">
        <span>Programming With Memes</span>
      </div>
      <div className="leftDiv">
        <span>Programming Jokes</span>
      </div>
      <div className="leftDiv">
        <span>HTML CSS JAVASCRIPT</span>
      </div>
      <div className="leftDiv">
        <span>React Js Developers</span>
      </div>
    </div>
  );
}

export default LeftSide;

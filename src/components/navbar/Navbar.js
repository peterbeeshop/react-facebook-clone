import React from "react";
import "./Navbar.css";
import fbLogo from "./fb.png";
import myImage from "./pb.jpg";
// import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SelectAllRoundedIcon from "@mui/icons-material/SelectAllRounded";
import ChatIcon from "@mui/icons-material/Chat";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left__div">
        <img src={fbLogo} alt="fb logo" />
        <input type="text" defaultValue={"Search Facebook"} />
      </div>
      <div className="middle__div">
        <span>
          {" "}
          <HomeIcon fontSize="large" className="change__iconColor " />
        </span>
        <span>
          <LiveTvIcon fontSize="large" className="change__iconColor" />
        </span>
        <span>
          <StorefrontIcon fontSize="large" className="change__iconColor" />
        </span>
        <span>
          <GroupsIcon fontSize="large" className="change__iconColor" />
        </span>
        <span>
          <SportsEsportsRoundedIcon
            fontSize="large"
            className="change__iconColor"
          />
        </span>
      </div>
      <div className="right__div">
        <span>
          <img src={myImage} alt="myImage" className="myImage" />
          peter
        </span>
        <SelectAllRoundedIcon
          fontSize="large"
          className="change__iconColor icon"
        />
        <ChatIcon fontSize="large" className="change__iconColor icon" />
        <NotificationsRoundedIcon
          fontSize="large"
          className="change__iconColor icon"
        />
        <ArrowDropDownRoundedIcon
          fontSize="large"
          className="change__iconColor icon"
        />
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import "./RightSide.css";
import image from "../navbar/pb.jpg";
import nft from "./nft.jpg";
import artwork from "./image.jpg";
import PeopleIcon from "@mui/icons-material/People";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
function RightSide() {
  return (
    <div className="right__side">
      <div className="rightDiv">
        <div className="request">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <PeopleIcon fontSize="medium" color="primary" />{" "}
            <span style={{ paddingLeft: "10px" }}>Friend requests</span>
          </div>
          <MoreHorizIcon fontSize="medium" />
        </div>
        <div className="requestDetails">
          <img src={image} alt="myImage" className="my__image" />
          <div className="requestName">
            <span>Pragmatic Coder</span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img src={image} alt="someImage" className="requestImage" />
              <span>1 Mutual Friend</span>
            </div>
          </div>
          <h4>2w</h4>
        </div>
        <section className="btn__section">
          <button className="confirm">Confirm</button>
          <button className="delete">Delete</button>
        </section>
      </div>
      <hr style={{ width: "100%", marginTop: "15px", borderBottom: " 1px" }} />
      <h4>Sponsored</h4>
      <div className="sponsored">
        <img src={nft} alt="nft" className="nft__image" />
        <div className="sponsored__text">
          <span>Nft marketplace where the best NFT is found</span>
          <i>nft.fnd.mktplc</i>
        </div>
      </div>
      <div className="sponsored">
        <img src={artwork} alt="artwork" className="nft__image" />
        <div className="sponsored__text">
          <span>Get the best artwork from around the globe</span>
          <i>artwork.com</i>
        </div>
      </div>
      <hr style={{ width: "100%", marginTop: "15px", borderBottom: " 1px" }} />
      <div className="contact">
        <h4>contacts</h4>
        <div className="contact__icons">
          <VideoCameraFrontIcon fontSize="medium" />
          <SearchIcon fontSize="medium" />
          <MoreHorizIcon fontSize="medium" />
        </div>
      </div>
      <div className="leftDiv">
        <PersonIcon fontSize="large" />
        <span>A coding Beeshop</span>
      </div>
      <div className="leftDiv">
        <img src={image} alt="myImage" />
        <span>coder coder</span>
      </div>
      <div className="leftDiv">
        <img src={image} alt="myImage" />
        <span>the programmer</span>
      </div>
    </div>
  );
}

export default RightSide;

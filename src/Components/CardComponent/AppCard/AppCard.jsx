import React from "react";
import phone from "../../../assets/Images/phone.png";
import "./AppCard.css";

const AppCard = () => {
  return (
    <div className="app-card-container">
      <p className="app-card-title">Learning made easy</p>
      <div className="app-card-textImage">
        <p className="app-card-container-brief">Download our mobile app now</p>
        <img src={phone} alt="Download App" className="app-card-image" />
      </div>
      <button className="app-card-download-btn">Download now</button>
    </div>
  );
};

export default AppCard;

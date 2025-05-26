import React from "react";
import "./UserProfile.css";
import UXDesignerCourse from "../UXDesignerCourse/UXDesignerCard";

const UserProfile = () => {
  return (
    <div className="userMain">
      <div className="userDiv">
        <div className="userData">
          <p>Good Morning R. Spencer</p>
          <p>01:00 PM</p>
        </div>
      </div>

      <div className="userInfo">
        <div className="userInfoText">
          <img src="/src/assets/Images/userIcon2.png" alt="user icon" className="userIcon2" />
          <h4 className="personalize-text">Personalize your best learning!</h4>
        </div>

        <div className="userInfoBtn">
          <p className="persoText">
            Personalized recommendations save you time by suggesting courses perfectly tailored to your interests and learning goals.
          </p>
          <button className="userBtn">Personalize Learning</button>
        </div>
      </div>





      
    </div>
  );
};

export default UserProfile;

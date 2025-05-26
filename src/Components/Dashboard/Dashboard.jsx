import React from "react";
import "./Dashboard.css";
import UserProfile from "../UserProfile/UserProfile";
import CourseOnRoles from "../CourseOnRoles/CourseOnRoles";
import UXDesignerCourse from "../UXDesignerCourse/UXDesignerCard";
import TopVendors from "../TopVendors/TopVendors";
import AllCards from "../CardComponent/AllCards";
// import Footer from "../Footer/Footer";
const Dashboard = () => {
  return (
    <div>
    <div className="mainDash">
      <UserProfile />
      <CourseOnRoles />
      
      <TopVendors />
      
      {/* <AllCards /> */}
    </div>
    
    </div>
  );
};

export default Dashboard;

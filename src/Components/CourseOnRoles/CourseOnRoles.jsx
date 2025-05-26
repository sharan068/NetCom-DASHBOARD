import React, { useState, useRef } from 'react';
import './CourseOnRoles.css';
import UXDesignerCourse from '../UXDesignerCourse/UXDesignerCard';
import CourseData from '../../../CoursesOnRoles.json'; // This is the object with 3 arrays

const CourseOnRoles = () => {
  const [courseOnRoles] = useState(CourseData.CoursesOnRoleses); // Array of roles
  const [activeRole, setActiveRole] = useState(CourseData.CoursesOnRoleses[0]?.CourseName || '');
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="CourseRolesMain">
      <h1 className="CourseRolesMainHeading">Trending Courses based on roles</h1>

      <div className="roles-scroll-wrapper">
        <button className="scroll-button left" onClick={() => scroll('left')}>&lt;</button>

        <div className="scrollable-roles-container" ref={scrollRef}>
          {courseOnRoles.map((item, index) => (
            <button
              key={index}
              className={`role-tab ${activeRole === item.CourseName ? 'active' : ''}`}
              onClick={() => setActiveRole(item.CourseName)}
            >
              {item.CourseName}
            </button>
          ))}
        </div>

        <button className="scroll-button right" onClick={() => scroll('right')}>&gt;</button>
      </div>

      <UXDesignerCourse />
    </div>
  );
};

export default CourseOnRoles;

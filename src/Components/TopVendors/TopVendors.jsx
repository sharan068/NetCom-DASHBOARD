import React, { useState, useEffect, useRef } from 'react';
import UXDesignerCourse from '../UXDesignerCourse/UXDesignerCard';
import CourseData from "../../../CoursesOnRoles.json"; // Adjust path as needed

const TopVendors = () => {
  const [CourseOnRoles, setCourseOnRoles] = useState([]);
  const [activeRole, setActiveRole] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const topVendorCourses = CourseData.TopvendorsCourse;
    setCourseOnRoles(topVendorCourses);
    if (topVendorCourses.length > 0) {
      setActiveRole(topVendorCourses[0].CourseName);
    }
  }, []);

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
      <h1 className='CourseRolesMainHeading'>Trending Courses from top vendors</h1>

      <div className="roles-scroll-wrapper">
        <button className="scroll-button left" onClick={() => scroll('left')}>&lt;</button>

        <div className="scrollable-roles-container" ref={scrollRef}>
          {CourseOnRoles.map((item, index) => (
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

export default TopVendors;

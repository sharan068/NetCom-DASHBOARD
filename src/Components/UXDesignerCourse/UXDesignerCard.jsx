import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './UXDesignerCourse.css';
import CardIcon from '../../assets/Icons/icon.png';
import LevelIcon from '../../assets/Icons/levelIcon.png';
import IconDuration from '../../assets/Icons/IconDuration.png';
import PriceIcon from '../../assets/Icons/price.png';
import CourseData from '../../../CoursesOnRoles.json'; // Adjust path if needed

const UXDesignerCourse = () => {
  const [UXDesignerCourse, setUXDesignerCourse] = useState([]);

  useEffect(() => {
    setUXDesignerCourse(CourseData.UxDesignerCourse);
  }, []);

  return (
    <div className='UXDesignerCourseMain'>
      <h1 className='UXDesignerCourseMainHeading'>Trending Courses for UX Designers</h1>
      <div className='UXDesignerCourseCards'>
        {UXDesignerCourse.map((course, index) => (
          <Card key={index} className="card zoom-card">
            <Card.Body>
              <div className='card-icons'>
                <img src={CardIcon} alt="Level" />
                <Card.Text className="ux-course-identity">{course.identity}</Card.Text>
              </div>

              <Card.Title className='card-title'>{course.title}</Card.Title>

              <div className="ux-course-info">
                <div className="ux-course-detail">
                  <img src={LevelIcon} alt="Level" className="ux-course-icon" />
                  <span className='card-level'>{course.level}</span>
                </div>
                <div className="ux-course-detail">
                  <img src={IconDuration} alt="Duration" className="ux-course-icon" />
                  <span className='card-duration'>{course.time}</span>
                </div>
                <div className="ux-course-detail">
                  <img src={PriceIcon} alt="Price" className="ux-course-icon" />
                  <span className="card-price">${course.price}</span>
                  <del>${course.discount}</del>
                </div>
              </div>

              <Card.Text className="ux-course-offer">{course.content}</Card.Text>
              <Card.Link href="#">Enroll Now</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UXDesignerCourse;

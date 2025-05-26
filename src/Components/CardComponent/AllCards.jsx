import React from 'react'
import './AllCards.css'
import AppCard from './AppCard/AppCard'
import SignInCard from './SignInCard/SignInCard'
import ConsultantCard from './ConsultantCard/ConsultantCard'
import FeedBackCard from '../FeedBackCard/FeedBack'
// import RobertCard from './RobertCard/RobertCard'
const AllCards = () => {
  return (
    <div className="dashboard-cards-panel">
      <AppCard />
      <SignInCard />
      <ConsultantCard />
      <FeedBackCard />
    </div>
  );
};

export default AllCards
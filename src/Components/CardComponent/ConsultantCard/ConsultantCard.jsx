import React from 'react';
import './ConsultantCard.css';
import robertImage from '../../../assets/Images/robertImage.png'
import iconCall from '../../../assets/Images/iconCall.png'
import iconChat from '../../../assets/Images/iconChat.png'
import videoCall from '../../../assets/Images/videoCall.png'
const ConsultantCard = () => {
  return (
    <div className="consultant-card">
      <img src={robertImage} alt="Consultant" className="consultant-image" />

      <div className="consultant-info">
        <div className='consultant-info-text'><p className="consultant-title">My Learning Consultant</p>
        <h3 className="consultant-name">Robert Washington</h3></div>
        
        
        {/* <p className="consultant-desc">
          Helping you make the right career decisions with expert guidance and personalized strategies.
        </p> */}
<div className='consultant-icons'>
<img src={iconCall} alt="call icon"/>
<img src={iconChat } alt="chat icon"/>
<img src={videoCall} alt=" video call icon"/>
</div>
        

       
      </div>
    </div>
  );
};

export default ConsultantCard;
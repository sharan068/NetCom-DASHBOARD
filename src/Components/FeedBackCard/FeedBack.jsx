import React from 'react'
import './FeedBack.css'
import feedImage from '../../assets/Images/feedImage.png'
import feedButton from '../../assets/Images/feedButton.png'
const FeedBackCard = () => {
  return (
    <div className='feedback-container'>

        <div className='feed-image'>
<img src={feedImage}  />
        </div>
        

        <div className='feedback-content'>
<div className='feedback-title'>
    <p className='feedback-text'>Help us improve</p>

    <button className="feedback-button">
  <img src={feedButton} alt="Share Feedback" />
  Share Feedback
</button>
</div>
        </div>
    </div>
  )
}

export default FeedBackCard
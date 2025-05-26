import React from 'react'
import './SignInCard.css'
import signIn from '../../../assets/Images/signIn.png'
import cardGirl from "../../../assets/Images/cardGirl.png"
const SignInCard=()=>{

    return(
        <div className='sign-in-card-main'>
            <img src={signIn} className='signinImage' />

            <div className='signin-card-textImage'>
                <p className='sign-in-card-text'>Your next career move starts here.</p>
                <img src={cardGirl}/>
            </div>
            <button className='sign-in-btton'>
  Sign In <span className="arrow">&gt;</span>
</button>
        </div>
    )
}

export default SignInCard
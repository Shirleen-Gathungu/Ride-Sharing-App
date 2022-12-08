import React from "react";
import '../components/How.css';
// import Road from './images/road.gif';
import wait from './images/wait.gif';
import ride from './images/ride.gif';
import ratings from './images/ratings.gif';
const How = ()=>{
return (
    <div className="full-container">
        <div className="second-container">

        </div>
        <div className="word-container">
        <h1>Join Digiride Community</h1>
        <p>Create an account and take your first ride after registration.<br/> From €0,25 p/m you can drive around town. Make it count!</p>
        <button>Register</button>
        </div>
        <div className="third-container">
            <h1>How it Works</h1>
            <div className="step-one">
                <h1>01</h1>
                <h2>Find & Reserve</h2>
                <p>Use the app to locate nearby Digirides at affordable and convenient price.</p>
                <img src={wait} alt="request"/>
                <hr className="horiz-one"/>
            </div>
            <div className="step-two">
             <h1>02</h1>
             <h2>Ride & Enjoy</h2>
             <p>Within the Digiride service area,
                you can drive everywhere fast and carefree.</p>
            <img src={ride} alt="ride"/>
            <hr className="horiz-two"/>
            </div>
            <div className="step-three">
             <h1>03</h1>
             <h2>Rate & Try Again</h2>
             <p>Rate your drive to help us know how to improve our platform.</p>
            <img src={ratings} alt="rate"/>
            <hr className="horiz-three"/>
            <div className="why-digi">
                <h1>Why Digi</h1>
                <p className="digi">Digi is the best ride platform,convenient,affordable and always on time. Digiride will be there for you,say your stage,place and time. </p>


            </div>
            </div>
        </div>


    </div>
)
};

export default How;
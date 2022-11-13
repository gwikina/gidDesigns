import React from 'react'
import './Profile.css';
import Typical from 'react-typical'
import ScrollService from '../../../utilities/ScrollService';
import gwikinaResume from '../../../assets/Resume/Wikina_Gideon_Resume.pdf'

export default function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="profile-details-name">
                    <span className="primary-text"> 
                        {" "}
                        Hello, I am <span className="highlighted-text"> Gideon </span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text"> 
                        {" "}
                        <h1> 
                            <Typical
                            loop = {Infinity}
                            steps={[
                                "Ethustatic Eng. 😛",
                                1000,
                                "Fullstack Eng. 🥞",
                                1000,
                                "React Eng. 💡",
                                1000,
                                "Backend Eng. 🔌 ",
                                1000,
                                "Self-Adpative Eng. 💎",
                                1000,
                            ]}
                            wrapper={"h1"}
                            />
                        </h1>
                        <span className="profile-role-tagline">
                            Just a simple man trying to make his way into tech
                        </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> 
                            {""}
                            Hire Me {""}
                    </button>
                    <a href={gwikinaResume} download={gwikinaResume}>
                    <button className="btn highlighted-btn"> Get Resume </button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">
                </div>
            </div>
        </div>
    </div>
  )
}

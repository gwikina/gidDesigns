import React, { useState, useEffect } from 'react'
import './Resume.css'
import sh from '../../assets/Resume/secondaryhandles.png'
import ScrollService from '../../utilities/ScrollService'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Animations from '../../utilities/Animations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHistory, faComputer, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carsoselOffsetstyle, setCarsoselOffsetstyle] = useState({})


    let fadeInScreenHandler = (screen)  => {
        if(screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)


    const ResumeHeading = (props) =>{
        return (
                <div className="resume-heading">
                    <div className="resume-main-heading">
                        <div className="heading-bullet"/>
                            <span> { props.heading && props.link ? (<a href={props.link}> {props.heading} </a> ) : props.heading} </span>
                            {props.fromDate && props.toDate? (
                                <div className="headingDate">
                                    {props.fromDate + " - "+ props.toDate}
                                </div>
                    )
                    :
                    <div/>
                    }
                </div>
                <div className="resume-sub-heading">
                    <span> {props.subHeading? props.subHeading : ''}</span>
                </div>
                <div className="resume-heading-description">
                    <p> {props.description? props.description : ""} 
                    {props.image? <img src={sh} id="secondary-handles"/>: '' } 
                    </p>
                    <p> {props.utilized? `Utilized: ${props.utilized}`: '' } </p>
                </div>
            </div>
        )
    }
    const resumeBullet = [
        {label: "Education", iconSrc: faBook}, 
        {label: "Work History", iconSrc: faHistory}, 
        {label: "Programming Skills", iconSrc:faComputer}, 
        {label: "Projects", iconSrc: faProjectDiagram}, 
    ]

    const programmingSkillsDetails = [
        {skill: 'Javascript', rating: 85},
        {skill: 'React Js', rating: 85},
        {skill: 'Vue Js', rating: 70},
        {skill: 'Python', rating: 95},
        {skill: 'Java', rating: 90},
        {skill: 'Node Js', rating: 88},
        {skill: 'C++', rating: 85},
        {skill: 'HTML', rating: 97},
        {skill: 'CSS', rating: 92},
        {skill: 'AWS', rating: 80},
    ]

    const projectDetails = [
        {
            title: 'No Access To Primary Email - Secondary Handles', 
            duration: {
                fromDate: "SEP 2022" , 
                toDate: "DEC 2022"
            },
            details:
            {
                desc: `LinkedIn users can now regain access to their accounts using a secondary email and phone-number. 
                Say goodbye to the long and inefficient manual reviews that were used when you lost access to your primary email 
                and tried to reset your password! This innovative solution paves the way for a quick and seamless process`,
                image: true, 
                link: "https://www.linkedin.com/checkpoint/rp/request-password-reset?trk=guest_homepage-basic_nav-header-signin"
            },
        },
    ]

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading 
                heading = {"Rochester Institute of Technology"}
                subHeading = {"Bachelor of Science, Software Engineering"}
                fromDate = {'2019'}
                toDate= {"2023"}
            />
            <ResumeHeading 
                heading = {"Richard Montgomery High School"}
                subHeading = {"International Baccaleureate"}
                fromDate = {'2015'}
                toDate= {"2019"}
            />
        </div> , 
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading 
                    heading = {"Linkedin"}
                    subHeading = {"UI Engineering Intern"}
                    fromDate = {'SEP 2022'}
                    toDate= {"DEC 2022"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                    Manual reviews for password reset were inefficient for companies of large scale due to high cost and likelihood of human error.
                    Designed system to limit the number of manual reviews where users do not have access to their primary email, with goal of 
                    retaining active users and cutting unnecessary costs.
                    </span>
                    <br />
                    <span className="resume-description-text">
                    • Analyzed alternative self-serve recovery options for regaining access to a user’s account
                    </span>
                    <br />
                    <span className="resume-description-text">
                    • Designed a new user experience where secondary handles can be used for password reset
                    </span>
                    <br />
                    <span className="resume-description-text">
                    • Implemented solution that would reduce the ID verification case volume by 20%
                    </span>
                    <br />
                </div>
            </div>
      </div> ,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills" >
        {programmingSkillsDetails.map((skill, index) => (
            <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
                <div
                style={{ width: skill.rating + "%" }}
                className="active-percentage-bar"
                ></div>
            </div>
            </div>
        ))}
    </div>,
    <div className="resume-screen-container" key="projects">
    {projectDetails.map((detail, index) => (
      <ResumeHeading
        key={index}
        heading={detail.title}
        link={detail.details.link}
        description={detail.details.desc}
        utilized={detail.details.utilized}
        fromDate={detail.duration.fromDate}
        toDate={detail.duration.toDate}
        image={detail.details.image}
      />
    ))}
  </div>
    ]

    const handleCarousal = (index) => {
        let offsetHeight = 420;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
    
        setCarsoselOffsetstyle(newCarousalOffset);
        setSelectedBulletIndex(index);
      };

    const getBullets = () => {
        return resumeBullet.map((bullet, index) => (
            <div 
            className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            onClick={() => handleCarousal(index)}
            key={index}
            >
            <FontAwesomeIcon icon={bullet.iconSrc} className="bullet-logo"/>
             <span> {bullet.label}</span>
            </div>
        ))
    }
    const getResumeScreens = () => {
        return (
          <div
            style={carsoselOffsetstyle.style}
            className="resume-details-carousal"
          >
            {resumeDetails.map((ResumeDetail) => ResumeDetail)}
          </div>
        );
      };

    useEffect(() => {
        return () => {
          /* UNSUBSCRIBE THE SUBSCRIPTIONS */
          fadeInSubscription.unsubscribe();
        };
      }, [fadeInSubscription]);

    return (
        <div className="resume-container screen-container fade-in" id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={'Resume'} subHeading={'Learn more about me'} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container"> 
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
        </div>
    </div>
    )
}

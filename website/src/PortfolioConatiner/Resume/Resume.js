import React, { useState, useEffect } from 'react'
import './Resume.css'
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
                    <p> {props.description? props.description : ""} </p>
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
            title: 'Anthems — Website / Hackathon Project', 
            duration: {
                fromDate: "NOV 2020" , 
                toDate: "NOV 2020"
            },
            details:
            {
                desc: `
                Placed BEST OVERALL in MATAHack's 48 hour virtual hackathon for designing a platform that highlights the best new music and upcoming artists 
                in Hip Hop.`,
                utilized: 'Dynamic HTML, CSS, Javascript, Cloudflare API, Git, and Jquery ',
                link: "https://gwikina.github.io/Anthems/"
            },
        },
        {
            title: 'HelloMyNameIs', 
            duration: {
                fromDate: "SEP 2021" , 
                toDate: "SEP 2021"
            },
            details:
                {
                    desc: `Generated random profiles for random people using the random user generator api.`,
                    utilized: 'React, Random-user-generator-api, CSS, Git ',
                    link: "https://gwikina.github.io/HelloMyNameIs/"
                },
        },
        {
            title: 'Grid World - Python & Reinforcement Learning', 
            duration: {
                fromDate: "MAR 2022" , 
                toDate: "MAR 2022"
            },
            details:
                {
                    desc: `Implemented Grid-world domain that we learned in class using the environmental dynamics to shape learning`,
                    utilized: 'Python3, NumPy, Reinforcement Learning, Gridworld, Object-oriented programming',
                    link: "https://gwikina.github.io/HelloMyNameIs/"
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
                    heading = {"American Express"}
                    subHeading = {"Software Engineering Intern"}
                    fromDate = {'JUN 2022'}
                    toDate= {"AUG 2022"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                    · Abstracted complicated business flows by using React to displaying them as interactive flow diagrams
                    </span>
                    <br />
                    <span className="resume-description-text">
                    · Sped up development time by over 50% by implementing an interactive front-end that updates json
                    </span>
                    <br />
                    <span className="resume-description-text">
                    · Automated the creation of business diagrams by using Java to convert json files into XML
                    </span>
                    <br />
                    <span className="resume-description-text">
                    · Relieved engineering effort by allowing end-users to make updates opposed to json updates by engineers
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

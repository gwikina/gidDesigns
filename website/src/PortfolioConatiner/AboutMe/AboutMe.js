import React, {useEffect} from 'react'
import './AboutMe.css'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import gwikinaResume from '../../assets/Resume/Wikina_Gideon_Resume.pdf'
export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)  => {
        if(screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
    const SCREEN_CONSTANT = {
        description: `
        As a current Software Engineering student at Rochester Institute of Technology (RIT), technology changed my life in a way that is difficult to explain. 
        It changed the way that I thought about things. What started as an extension of my education has become a tool for personal growth.
        Understanding software has allowed me to understand people and their needs. I have been blessed to work in different industries such as hospitality, 
        fin-tech, and big tech. In all cases pushing code into production and seeing the fruits of my labor. I have a lot to offer and hopefully you and I will
        be working together soon!
        `,
        highlights: {
            bullets: [
                'Full Stack Web Engineering',
                'Interactive Front-end',
                'Cloud Computing', 
                'Developing React Apps',
                'Building REST APIs',
                'Managing Databases',
                'IoT & Blockchain'
            ],
            heading: "Here are a few highlights... "
        }
    }
    useEffect(() => {
        return () => {
          /* UNSUBSCRIBE THE SUBSCRIPTIONS */
          fadeInSubscription.unsubscribe();
        };
      }, [fadeInSubscription]);
      
    const renderHighlights = () => {
        return(SCREEN_CONSTANT.highlights.bullets.map((highlight, i) => (
            <div className="highlight" key={i}>
                <div className="highlight-blob"></div>
                <span> {highlight} </span>
            </div>
        )))
    }
    return (
        <div className="about-me-container  screen-container fade-in" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading={'I am your guy'} />
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-descripption"> {SCREEN_CONSTANT.description} </span>
                        <div className="about-me-highlights"> 
                            <div className="highlight-heading"> 
                                {SCREEN_CONSTANT.highlights.heading}
                            </div>
                            {renderHighlights()}
                        </div>
                        <div className="about-me-options"> 
                            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> Hire Me </button>
                            <a href={gwikinaResume} download={gwikinaResume}>
                                <button className="btn highlighted-btn"> Get Resume </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

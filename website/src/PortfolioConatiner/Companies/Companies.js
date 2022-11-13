import React, {useEffect} from 'react'
import './Companies.css'

import ScrollService from '../../utilities/ScrollService'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Animations from '../../utilities/Animations'
import linkedin from "../../images/companies/linkedin.png"
import amex from "../../images/companies/amex.png"
import cfa from "../../images/companies/cfa.png"
import rit from "../../images/companies/rit.png"


export default function ContactMe(props) {
    let fadeInScreenHandler = (screen)  => {
        if(screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
    useEffect(() => {
        return () => {
          /* UNSUBSCRIBE THE SUBSCRIPTIONS */
          fadeInSubscription.unsubscribe();
        };
      }, [fadeInSubscription]);

    return (
        <div className="main-container fade-in" id={props.id || ''}>
            <ScreenHeading title={'Where I have been'} subHeading={"Companies I have worked for"} />
            <div class="sticker-area">
                <img src={linkedin} alt="Linkedin" />
                <img src={amex} alt="American Express" />
                <img src={cfa} alt="Chick-fil-A" />
                <img src={rit} alt="Rochester Institute of Technology" />
            </div>  
        </div>
    )
}

import React, {useEffect} from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'
import Header from './Header/Header'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
export default function Home(props) {
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
    <div className="home-container" id={props.id || ''}>
        <Header/>
        <Profile/>
        <Footer/>
    </div>
  )
}

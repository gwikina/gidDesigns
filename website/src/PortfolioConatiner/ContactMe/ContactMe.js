import React, {useState, useEffect} from 'react'
import './ContactMe.css'
import imgBack from '../../images/mailz.jpeg'
import load1 from '../../images/load2.gif'
import ScrollService from '../../utilities/ScrollService'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Animations from '../../utilities/Animations'
import Typical from 'react-typical'

import Footer from '../Footer/Footer'

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

      const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        message: "",
      });
    const [banner, setBanner] = useState("")

    function handleStateChange(e) {
        setMailerState((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      }

      const submitEmail = async (e) => {
        e.preventDefault();
        console.log({ mailerState });
        const response = await fetch("http://localhost:3001/send", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ mailerState }),
        })
          .then((res) => res.json())
          .then(async (res) => {
            const resData = await res;
            console.log(resData);
            if (resData.status === "success") {
              alert("Message Sent");
            } else if (resData.status === "fail") {
              alert("Message failed to send");
            }
          })
          .then(() => {
            setMailerState({
              email: "",
              name: "",
              message: "",
            });
          });
      };

    return (
        <div className="main-container fade-in" id={props.id || ''}>
            <ScreenHeading title={'Contact Me'} subHeading={"Let's work together"} />
            <div className="central-form">
                <div className="col">
                    <h2> 
                        <Typical
                            loop = {Infinity}
                            steps={[
                                "Get in touch 😛",
                                1000,
                                "Email Me and ",
                                1000,
                                "get your job done ",
                                1000,
                            ]}
                            />
                    </h2>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4> Send your email here </h4>
                        <img src={imgBack} alt="form banner" />
                    </div>
                    <form onSubmit={submitEmail}>
                        <p> { banner } </p>
                        <label htmlFor="name" > Name </label>
                        <input type="text" onChange={handleStateChange} name="name" value={mailerState.name}/>

                        <label htmlFor="email" > Email </label>
                        <input type="email" onChange={handleStateChange} name="email" value={mailerState.email}/>

                        <label htmlFor="message" > Message </label>
                        <textarea type="text" onChange={handleStateChange} name="message" value={mailerState.message}/>

                        <div className="send-btn">
                                <button type="submit">
                                    send <i className="fa fa-paper-plane"/>
                                </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

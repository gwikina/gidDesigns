import Home from "../PortfolioConatiner/Home/Home";
import AboutMe from "../PortfolioConatiner/AboutMe/AboutMe";
import Resume from "../PortfolioConatiner/Resume/Resume";
import ContactMe from "../PortfolioConatiner/ContactMe/ContactMe";
import Companies from "../PortfolioConatiner/Companies/Companies"
export const TOTAL_SCREENS = [
    {
        screen_name: "Home", 
        component: Home,
    }, 
    {
        screen_name: "About Me", 
        component: AboutMe,
    }, 
    {
        screen_name: "Resume", 
        component: Resume,
    }, 
    {
        screen_name: "Companies", 
        component: Companies,
    }, 
    {
        screen_name: "Contact Me", 
        component: ContactMe,
    }, 
]
export const GET_SCREEN_INDEX = (screen_name) => {
    if(!screen_name) return -1
    for (let i = 0; i < TOTAL_SCREENS.length; i++){
        if(TOTAL_SCREENS[i].screen_name === screen_name)
            return i
    }
    return -1
}
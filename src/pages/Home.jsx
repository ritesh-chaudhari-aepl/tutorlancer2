import Banner from "../components/banner/Banner"
import Hero from "../components/container/HeroSection"
// import Instructor from "../components/container/Instructor"
 
import About from "./About"
import ChooseUs from "./ChooseUs"
import Contact from "./Contact"
import Download from "./Download"
import Features from "./Features"
 
import Schedule from "./Schedule"
import Sessions from "./Sessions"
// import Testimonials from "./Testimonials"

import {IoLogoWhatsapp} from "react-icons/io"
const Home = () => {
  return (
    <main>
      <a
             href="https://wa.me/message/HIJF2T5A43BHO1"
            className="    h-fit  bg-[green] group w-fit active:scale-110 text-lg font-bold text-white hover:scale-105 duration-300  delay-100  rounded-full right-7 bottom-5 fixed"
          >
           <span className="pl-3   text-primaryWhite">Chat In</span> <IoLogoWhatsapp className="inline-flex p-2" size={45} color="white"/>
          </a>
      
        
        <Hero />
        <Banner />
        <ChooseUs />
        {/* <Instructor /> */}
        <About />
        <Features />
        <Schedule />
        <Sessions />
        {/* <Testimonials /> */}
        <Contact />
        <Download />
        
    </main>
  )
}

export default Home
import Banner from "../components/banner/Banner"
import Hero from "../components/container/HeroSection"
import Instructor from "../components/container/Instructor"
import Header from "../components/header/Header"
import About from "./About"
import ChooseUs from "./ChooseUs"
import Contact from "./Contact"
import Download from "./Download"
import Features from "./Features"
import Footer from "./Footer"
import Schedule from "./Schedule"
import Sessions from "./Sessions"
import Testimonials from "./Testimonials"

const Home = () => {
  return (
    <main>
        <Header />
        <Hero />
        <Banner />
        <ChooseUs />
        <Instructor />
        <About />
        <Features />
        <Schedule />
        <Sessions />
        <Testimonials />
        <Contact />
        <Download />
        <Footer />
    </main>
  )
}

export default Home
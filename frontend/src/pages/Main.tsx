import AboutUS from "../components/AboutUS"
import Footer from "../components/Footer"
import Home from "../components/Home"
import Membership from "../components/Membership"
import Navbar from "../components/Navbar"
import Program from "../components/Program"
import Testimonial from "../components/Testimonial"


const Main = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="aboutus">
        <AboutUS />
      </div>
      <div id="program">
        <Program />
      </div>
      <div id="membership">
        <Membership />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Main
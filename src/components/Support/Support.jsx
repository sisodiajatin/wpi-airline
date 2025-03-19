import { useEffect } from "react"
import supportimg from "../../assets/supportimg.webp"
import Aos from 'aos'
import 'aos/dist/aos.css'


function Support() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="support container section">
      <div className="sectionContainer">

        <div className="titlesDiv">
          <small>Travel Support</small>
          <h2>Find help with Booking</h2>
          <p> </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">

            <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
              <span className="number">01</span>
              <h4>Travel requirments for USA</h4>
              <p>Fly confidently with WPI!</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Travel Insurance</h4>
              <p>Travel worry-free with us!</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='4500' className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Services at your arrival</h4>
              <p>Arrive with ease—WPI offers dedicated support at your destination </p>
            </div>

          </div>

          <div className="imgDiv">
            <img data-aos='fade-left' data-aos-duration='4500' src={supportimg} alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Support

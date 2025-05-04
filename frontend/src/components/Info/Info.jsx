import { RxCalendar } from 'react-icons/rx'
import { BsShieldCheck } from 'react-icons/bs'
import { BsFillBookmarkFill } from 'react-icons/bs'

const Info = () => {
  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Make memories of the World</h2>
          <button className='btn'>View All</button>
        </div>
        <div className="cardsDiv grid">
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className='icon' />
            </div>
            <span className="cardTitle">Book Now</span>
            <p>Secure your seat today with WPI! Book your flight in just a few clicks and enjoy real-time availability and flexible options. </p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className='icon' />
            </div>
            <span className="cardTitle">Safety</span>
            <p>Fly with confidence—WPI prioritizes your safety with rigorous health protocols, trained crew, and modern aircraft. </p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsFillBookmarkFill className='icon' />
            </div>
            <span className="cardTitle">Save More</span>
            <p>Unlock exclusive discounts and offers with WPI. Save on your next trip with our special deals and loyalty rewards.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info

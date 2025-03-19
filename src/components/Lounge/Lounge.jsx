import imageGrid from '../../assets/imageGrid.webp'

const Lounge = () => {
  return (
    <div className="lounge container flex">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={imageGrid} alt="" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
          <div className="grids grid">

            <div className="singleGrid">
              <span className="gridTitle">
                Help through the airport
              </span>
              <p>Enjoy peace of mind knowing they’re supported from check-in to boarding with WPI.</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">
                Priority Boarding
              </span>
              <p>Unaccompanied minors receive priority boarding to ensure a stress-free start to their journey.</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">
                Chauffeur-drive service
              </span>
              <p>WPI offers a chauffeur-drive service to transport your child safely to and from the airport</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">
                Care on Flight
              </span>
              <p>Our trained crew provides attentive care to unaccompanied minors throughout the flight.</p>
            </div>

          </div>
        </div>



      </div>
    </div>
  )
}

export default Lounge

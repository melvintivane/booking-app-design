import React from 'react';
import "./Attractions.css";
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Attractions = () => {
  return (
    <div>
      <Navbar/>
      <Header type="attractions"/>
      <div className="attractionsContainer">
        <div className="attractionsWrapper">
          <h1 className='attractionsTitle'>Top destinations</h1>
          <div className="attractionsList">
            <div className="attractionsItem">
              <img className="attractionsItemImg" src="https://q-xx.bstatic.com/xdata/images/xphoto/633x400/72203688.jpg?k=882dfd9985340ffb2a8553b56580d2139455c38e310899b3949b6dff9a8590df&o=" alt="" srcset="" />
              <div className="attractionsTitles">
                <h4>Dubai</h4>
                <span>793 things to do</span>
              </div>
            </div>
            <div className="attractionsItem">
              <img className='attractionsItemImg' src="https://q-xx.bstatic.com/xdata/images/xphoto/633x400/72204269.jpg?k=dda35f09d4db949aa6786bc25686bddd016cdd12a2603193e90df0d44a51a1ac&o=" alt="" srcset="" />
              <div className="attractionsTitles">
                <h4>London</h4>
                <span>711 things to do</span>
              </div>
            </div>
            <div className="attractionsItem">
              <img className='attractionsItemImg' src="https://q-xx.bstatic.com/xdata/images/city/633x400/654667.jpg?k=38b7cadbc436ac8f1990d593aeea431bdca024ad7e19136de1a648a741efd1d2&o=" alt="" srcset="" />
              <div className="attractionsTitles">
                <h4>Instambul</h4>
                <span>213 things to do</span>
              </div>
            </div>
            <div className="attractionsItem">
              <img className='attractionsItemImg' src="https://q-xx.bstatic.com/xdata/images/city/633x400/976784.jpg?k=717a6a83ea61edb06017bb8c9bd3d36511ec0e1aef59ac94235584d4fd1709cb&o=" alt="" srcset="" />
              <div className="attractionsTitles">
                <h4>New York</h4>
                <span>691 things to do</span>
              </div>
            </div>
            <div className="attractionsItem">
              <img className='attractionsItemImg' src="https://q-xx.bstatic.com/xdata/images/city/633x400/977068.jpg?k=60e8c40ecdd20063f9c429d6e3837cb35f972446db199ddc23a67f28a01c6c68&o=" alt="" srcset="" />
              <div className="attractionsTitles">
                <h4>Las Vegas</h4>
                <span>391 things to do</span>
              </div>
            </div>
            <div className="attractionsItem">
              <img className='attractionsItemImg' src="https://q-xx.bstatic.com/xdata/images/xphoto/633x400/72204347.jpg?k=2028e72e4ea4eb18da986b8a60fd841f65fe0575db5012d723233b4427939b4a&o=" alt="" srcset="" />
              <div className="attractionsTitles">
                  <h4>Paris</h4>
                  <span>670 things to do</span>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </div>
  )
}

export default Attractions
import React from 'react';
import "./Attractions.css";
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faHeadset, faMagnet } from '@fortawesome/free-solid-svg-icons';



const data = [
  {
    id: 1,
    title: "Dubai",
    desc: "793 things to do",
    img: "https://q-xx.bstatic.com/xdata/images/xphoto/633x400/72203688.jpg?k=882dfd9985340ffb2a8553b56580d2139455c38e310899b3949b6dff9a8590df&o="
  },
  {
    id: 2,
    title: "London",
    desc: "793 things to do",
    img: "https://q-xx.bstatic.com/xdata/images/xphoto/633x400/72204269.jpg?k=dda35f09d4db949aa6786bc25686bddd016cdd12a2603193e90df0d44a51a1ac&o="
  },
  {
    id: 3,
    title: "Instambul",
    desc: "793 things to do",
    img: "https://q-xx.bstatic.com/xdata/images/city/633x400/654667.jpg?k=38b7cadbc436ac8f1990d593aeea431bdca024ad7e19136de1a648a741efd1d2&o="
  },
  {
    id: 4,
    title: "New York",
    desc: "793 things to do",
    img: "https://q-xx.bstatic.com/xdata/images/city/633x400/976784.jpg?k=717a6a83ea61edb06017bb8c9bd3d36511ec0e1aef59ac94235584d4fd1709cb&o="
  },  
  {
    id: 5,
    title: "Las Vegas",
    desc: "391 things to do",
    img: "https://q-xx.bstatic.com/xdata/images/city/633x400/977068.jpg?k=60e8c40ecdd20063f9c429d6e3837cb35f972446db199ddc23a67f28a01c6c68&o="
  },  
  {
    id: 6,
    title: "Paris",
    desc: "670 things to do",
    img: "https://q-xx.bstatic.com/xdata/images/xphoto/633x400/72204347.jpg?k=2028e72e4ea4eb18da986b8a60fd841f65fe0575db5012d723233b4427939b4a&o="
  },  
]


const Attractions = () => {
  return (
    <div>
      <Navbar/>
      <Header type="attractions"/>
      <div className="attractionsContainer">
        <div className="attractionsWrapper">
          <h1 className='attractionsTitle'>Top destinations</h1>
          <div className="attractionsList">
            {data.map((item) => (
                <div className="attractionsItem" key={item.id}>
                  <img className='attractionsItemImg' src={item.img} alt=""/>
                  <div className="attractionsTitles">
                      <h4>{item.title}</h4>
                      <span>{item.desc}</span>
                  </div>
                </div>
            ))}
          </div>
        </div>
        <div className="attractionsSignIn">
          <h1 className="attractionsSignInTitle">Sign in to save time</h1>
          <p className='attractionsSignInText'>Your Melvinbooking.com account lets you book using your saved details</p>
          <span>Sign in</span>
        </div>
        <hr />
        <div className="trustContainer">
          <h1 className="trustTitle">We've got you covered</h1>
          <div className="trustWrapper">
            <div className="attractiosTrustItem">
              <FontAwesomeIcon className='trustIcon' icon={faMagnet}/>
              <div>
                <h1 className="trustItemTitle">Explore top attractions</h1>
                <p>Experience the best of your destination, with attractions, tours, activities and more</p>
              </div>
            </div>
            <div className="attractiosTrustItem">
              <FontAwesomeIcon className='trustIcon' icon={faCalendarCheck}/>
              <div>
                <h1 className="trustItemTitle">Fast and flexible</h1>
                <p>Book tickets online in minutes, with free cancellation on many attractions</p>
              </div>
            </div>
            <div className="attractiosTrustItem">
              <FontAwesomeIcon className='trustIcon' icon={faHeadset}/>
              <div>
                <h1 className="trustItemTitle">Support when you need it</h1>
                <p>Melvinbooking.com's global Customer Service team is here to help 24/7</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="destinationsWrapper">
          <h1 className="destinationsTitle">Explore more destinations</h1>
          <p className='p'>Find things to do in cities around the world</p>
          <div className="destinationsCountry">
            <p className='destinationsParagraph active'>Europe</p>
            <p className='destinationsParagraph'>North America</p>
            <p className='destinationsParagraph'>Asia</p>
            <p className='destinationsParagraph'>Africa</p>
            <p className='destinationsParagraph'>Oceania</p>
            <p className='destinationsParagraph'>Middle East</p>
            <p className='destinationsParagraph'>South America</p>
            <p className='destinationsParagraph'>Caribbean</p>
            <p className='destinationsParagraph'>Central America</p>
          </div>
          <hr />
          <div className="attractionsWrapper">
            <div className="attractionsListTeste">
              {data.map((item) => (
                <div className="attractionsItemTeste" key={item.id}>
                  <img className="attractionsItemImg" src={item.img} alt="" />
                  <div className="attractionsTitles">
                    <h4>{item.title}</h4>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
              {data.map((item) => (
                <div className="attractionsItemTeste" key={item.id}>
                  <img className="attractionsItemImg" src={item.img} alt="" />
                  <div className="attractionsTitles">
                    <h4>{item.title}</h4>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
              {data.map((item) => (
                <div className="attractionsItemTeste" key={item.id}>
                  <img className="attractionsItemImg" src={item.img} alt="" />
                  <div className="attractionsTitles">
                    <h4>{item.title}</h4>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Attractions
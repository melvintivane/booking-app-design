import React from 'react';
import "./Featured.css"

const Featured = () => {
  return (
    <div className='featuredContainer'>
      <div className="featuredItem">
        <img className='featuredImg' src="https://images.pexels.com/photos/3021382/pexels-photo-3021382.jpeg?auto=compress&cs=tinysrgb&w=1080" alt="" />
        <div className="featuredTitles">
          <h1>Roma</h1>
          <h2>123 properties</h2>
        </div>
      </div> 
      <div className="featuredItem">
        <img className='featuredImg' src="https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="featuredTitles">
          <h1>Moscow</h1>
          <h2>123 properties</h2>
        </div>
      </div> 
      <div className="featuredItem">
        <img className='featuredImg' src="https://images.pexels.com/photos/15606856/pexels-photo-15606856/free-photo-of-kandy-town-queens-hotel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="featuredTitles">
          <h1>Cape Town</h1>
          <h2>123 properties</h2>
        </div>
      </div> 
      <div className="featuredItem">
        <img className='featuredImg' src="https://images.pexels.com/photos/1770812/pexels-photo-1770812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="featuredTitles">
          <h1>Brooklyn</h1>
          <h2>123 properties</h2>
        </div>
      </div> 
    </div>
  )
}

export default Featured
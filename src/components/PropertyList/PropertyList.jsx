import React from 'react';
import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className='propertyList'>
      <div className="propertyListItem">
        <img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="propertyListImg" />
        <div className="propertyListTitles">
          <h1>Hotels</h1>
          <h2>223 Hotels</h2>
        </div>
      </div>
      <div className="propertyListItem">
        <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="propertyListImg" />
        <div className="propertyListTitles">
          <h1>Apartments</h1>
          <h2>223 Hotels</h2>
        </div>
      </div>
      <div className="propertyListItem">
        <img src="https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="propertyListImg" />
        <div className="propertyListTitles">
          <h1>Resorts</h1>
          <h2>223 Hotels</h2>
        </div>
      </div>
      <div className="propertyListItem">
        <img src="https://images.pexels.com/photos/1134175/pexels-photo-1134175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="propertyListImg" />
        <div className="propertyListTitles">
          <h1>Villas</h1>
          <h2>223 Hotels</h2>
        </div>
      </div>
      <div className="propertyListItem">
        <img src="https://images.pexels.com/photos/3320529/pexels-photo-3320529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="propertyListImg" />
        <div className="propertyListTitles">
          <h1>Cabins</h1>
          <h2>223 Hotels</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList
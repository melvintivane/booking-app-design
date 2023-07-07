import React from 'react';
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from '../../components/Featured/Featured';
import PropertyList from '../../components/PropertyList/PropertyList';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
      </div>
    </div>
  )
}

export default Home
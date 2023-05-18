import React from "react";
import "../Styles/Hero.css";

function Hero(props){
  return (
    <div className="hero" id="main_section">
      <img src={props.imageSrc} alt="Travel" className="hero__image" />
      <h1 className="hero__title">Travel made simple.</h1>
    </div>
  );
};

export default Hero;
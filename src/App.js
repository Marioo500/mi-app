import * as React from 'react';
import "./Styles/App.css";
import travel_01 from "./assets/image-01.jpg";
import Hero from "./Components/Hero";
import Bar from "./Components/Bar"
import Slider from "./Components/Slider"

export default function App() {
  return (
    <div className='App'>
      <Bar />
      <Hero imageSrc={travel_01} 
      section={"main_section"}/>
      <Slider
      section={"Equiment"}
      imageSrc={travel_01}
      titulo={"Equipamiento"}
      subtitulo={"Mini explorador"}

      />
      <Slider
      section={"About Us"}
      imageSrc={travel_01}
      titulo={"Sobre Nosotros"}
      subtitulo={"Mini explorador2"}
      flipped={true}
      />

      <Slider
      section={"Products"}
      imageSrc={travel_01}
      titulo={"Productos"}
      subtitulo={"Mini explorador2"}
      />
      
    </div>
      
  );

}

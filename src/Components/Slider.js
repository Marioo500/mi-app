import React from "react";
import { useInView } from 'react-intersection-observer';
import "../Styles/Slider.css"

function Slider(props){

    const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0.5,
    });
    
    const renderContent = () =>{
        if(!props.flipped){
            return(
            <>
                <img src={props.imageSrc} alt="Travel" className="imagen_slider">
                </img>
                <div className="contendido_slider">
                    <h1 className="titulo_slider">{props.titulo}</h1>
                </div>
            </>
            )
        }
        else
        {
            return(
                <>
                    <div className="contendido_slider">
                        <h1 className="titulo_slider">{props.titulo}</h1>
                        <p>{props.subtitulo}</p>
                    </div>
                    <img src={props.imageSrc} alt="Travel" className="imagen_slider"></img>
                </>
                )
        }
    }
    return <div className={inView ? "slider slider--zoom" : "slider"} ref={ref} id={props.section}>{renderContent() }</div>
    
}

export default Slider;
import React from "react";
import Feather from "../bird_feather3.png";
import "./Feathers.css";
import Dots from "./Dots";

function Feathers() {
  return (
      <div> <Dots/>
    <div className="feathers">
    
      <div className="first">
        {" "}
        <img src={Feather} alt="feather"></img>
      </div>
      <div className="second">
        {" "}
        <img src={Feather} alt="feather"></img>
      </div>
      <div className="third">
        {" "}
        <img src={Feather} alt="feather"></img>
      </div>
      <div className="fourth">
        {" "}
        <img src={Feather} alt="feather"></img>
      </div>
      <div className="fifth">
        {" "}
        <img src={Feather} alt="feather"></img>
      </div>
      <div className="sixth">
        {" "}
        <img src={Feather} alt="feather"></img>
      </div>
      <div className="first">
        {" "}
        <img src={Feather} alt="feather"></img>
      </div>
      <div className="second">
        {" "}
        <img src={Feather} alt="feather"></img>
      </div>
      <div className="third">
        {" "}
        <img src={Feather} alt="feather"></img>
      </div>
      
    </div>
    <Dots/>
    </div>
  );
}

export default Feathers;

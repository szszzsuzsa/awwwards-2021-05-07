import React from "react";
import Bird from "./Bird";
import "./Loading.css";
import { useState, useEffect} from "react";

function Loading() {

   
    

  return (
    <div>
      <Bird />
      <div className="bottom-frame">
        <span className="loading-line"></span>
        <span className="number"></span>
      </div>
    </div>
  );
}

export default Loading;

import React from "react";
import { GiPathDistance } from "react-icons/gi";
import { GiFlyingBeetle } from "react-icons/gi";
import { GiParachute } from "react-icons/gi";
import { GiHummingbird } from "react-icons/gi";
import { GiSpaceSuit } from "react-icons/gi";
import { GiElephant } from "react-icons/gi";
import "./programheader.css";

const Programheader = (prop) => {
  return (
    <>
      <div className="pHeader">
        <h1>{prop.siteName}</h1>
        <p>
          <a href="#">Home</a> <span>&gt;</span> {prop.siteName}
        </p>
        <GiElephant className="headerIcon elephant" />
        <GiSpaceSuit className="headerIcon spaceman" />
        <GiPathDistance className="headerIcon mappi" />
        <GiFlyingBeetle className="headerIcon honeybee" />
        <GiParachute className="headerIcon parachute" />
        <GiHummingbird className="headerIcon bird" />
      </div>

      <div class="wave-wrapper">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,30 
               Q 50,90 100,30 
               T 200,30 T 300,30 T 400,30 T 500,30 
               T 600,30 T 700,30 T 800,30 T 900,30 
               T 1000,30 T 1100,30 T 1200,30 
               L 1200,100 L 0,100 Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Programheader;

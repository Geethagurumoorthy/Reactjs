import React, { useState, useEffect, useRef } from "react";
import Programheader from "../ProgramHeader/Programheader.jsx";
import "./programgrid.css";

const Programgrid = ({ children }) => {
  return (
    <div id="programGrid">
      <Programheader siteName="Program Grid" />
      <div className="gridSec">
        <div className="gridy">
          <img src="public/01.webp" alt="firstImg" />
          <h3>English Classes</h3>
          <p>
            Nulla a auctor leo. Vestibulum viverra mattis arcu nec viverra.
            Vivamus
          </p>

          <div className="schedule">
            <p>
              age
              <br />
              <span>3-5 years</span>
            </p>
            <p>
              weekly
              <br />
              <span>5 Days</span>
            </p>
            <p>
              time
              <br />
              <span>4.30 Hours</span>
            </p>
          </div>
        </div>

        <div className="gridy">
          <img src="public/02.webp" alt="secondImg" />
          <h3>Tutoring Individual</h3>
          <p>
            Nulla a auctor leo. Vestibulum viverra mattis arcu nec viverra.
            Vivamus
          </p>
          <div className="schedule">
            <p>
              age
              <br />
              <span>3-5 years</span>
            </p>
            <p>
              weekly
              <br />
              <span>5 Days</span>
            </p>
            <p>
              time
              <br />
              <span>4.30 Hours</span>
            </p>
          </div>
        </div>

        <div className="gridy">
          <img src="public/03.webp" alt="thirdImg" />
          <h3>Tutoring Online</h3>
          <p>
            Nulla a auctor leo. Vestibulum viverra mattis arcu nec viverra.
            Vivamus
          </p>
          <div className="schedule">
            <p>
              age
              <br />
              <span>3-5 years</span>
            </p>
            <p>
              weekly
              <br />
              <span>5 Days</span>
            </p>
            <p>
              time
              <br />
              <span>4.30 Hours</span>
            </p>
          </div>
        </div>

        <div className="gridy">
          <img src="public/04.webp" alt="fourthImg" />
          <h3>Art And Craft Classes</h3>
          <p>
            Nulla a auctor leo. Vestibulum viverra mattis arcu nec viverra.
            Vivamus
          </p>

          <div className="schedule">
            <p>
              age
              <br />
              <span>3-5 years</span>
            </p>
            <p>
              weekly
              <br />
              <span>5 Days</span>
            </p>
            <p>
              time
              <br />
              <span>4.30 Hours</span>
            </p>
          </div>
        </div>

        <div className="gridy">
          <img src="public/05.webp" alt="fifthImg" />
          <h3>Imagination Classes</h3>
          <p>
            Nulla a auctor leo. Vestibulum viverra mattis arcu nec viverra.
            Vivamus
          </p>
          <div className="schedule">
            <p>
              age
              <br />
              <span>3-5 years</span>
            </p>
            <p>
              weekly
              <br />
              <span>5 Days</span>
            </p>
            <p>
              time
              <br />
              <span>4.30 Hours</span>
            </p>
          </div>
        </div>

        <div className="gridy">
          <img src="public/06.webp" alt="sixthImg" />
          <h3>Wizards Of Chess</h3>
          <p>
            Nulla a auctor leo. Vestibulum viverra mattis arcu nec viverra.
            Vivamus
          </p>
          <div className="schedule">
            <p>
              age
              <br />
              <span>3-5 years</span>
            </p>
            <p>
              weekly
              <br />
              <span>5 Days</span>
            </p>
            <p>
              time
              <br />
              <span>4.30 Hours</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programgrid;

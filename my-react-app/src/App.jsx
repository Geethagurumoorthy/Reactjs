// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useState } from "react";
import ProgramDetails from "./ProgramDetails/ProgramDetails";
import Programgrid from "./Programgrid/Programgrid";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("PD");

  function handleClick(e, tab) {
    e.preventDefault();
    setActiveTab(tab);
  }

  return (
    <>
      <ul>
        <li>
          <a
            href="#programdetails"
            onClick={(e) => {
              handleClick(e, "PD");
            }}
          >
            Program Details
          </a>
        </li>
        <li>
          <a
            href="#programGrid"
            Program
            Grid
            onClick={(e) => {
              handleClick(e, "PG");
            }}
          >
            Program Grid
          </a>
        </li>
      </ul>

      <main>
        {activeTab === "PD" && <ProgramDetails />}
        {activeTab === "PG" && <Programgrid />}
      </main>

      {/* <ProgramDetails /> */}
      {/* <Programgrid/> */}
    </>
  );
}

export default App;

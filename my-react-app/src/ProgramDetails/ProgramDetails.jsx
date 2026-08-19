import React from "react";
import Programheader from "../ProgramHeader/Programheader.jsx";
import { FaUserCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { FaUserGroup } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "./programdetails.css";

const ProgramDetails = () => {
  return (
    <div id="programdetails">
      {/* header component */}
      <Programheader siteName="Program Details" />

      {/* enroll image section */}
      <div id="section_enroll">
        <div className="d-flex flex-column gap-4 Enroll_secA ">
          <div>
            <img src="src/assets/details-1.webp" alt="img1" />
          </div>
          <button type="button" className="btnGarden">
            Kindergarten
          </button>
          <h3>Drawing Classes</h3>
          <div className="pt-3 d-flex gap-5  review">
            <p>
              <FaUserCircle className="reactIcon" /> Savannah Nguyen
            </p>
            <p>
              <FaPlayCircle className="reactIcon" /> 30 Classes
            </p>
            <p>
              <FaStar className="reactIcon" /> 3.4 (36 Review)
            </p>
          </div>

          <h3>Descriptions</h3>
          <p>
            Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut
            labore et dolore of magna aliqua. Ut enim ad minim veniam, made of
            owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea dolor commodo consequat. Duis aute irure and dolor in
            reprehenderit.
          </p>
          <p>
            The is ipsum dolor sit amet consectetur adipiscing elit. Fusce
            eleifend porta arcu In hac augu ehabitasse the is platea augue
            thelorem turpoi dictumst. In lacus libero faucibus at malesuada
            sagittis placerat eros sed istincidunt augue ac ante rutrum sed the
            is sodales augue consequat.
          </p>
          <h3>Requirements for The Classes</h3>
          <p>
            Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet.
            Donec quis convallis neque. In id lacus pulvinar lacus, eget
            vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis
            in. Sed a massa eget lacus consequat auctor.
          </p>
          <p style={{ marginBottom: "-10px" }}>
            <IoCheckmarkSharp className="reactIcon" />
            Ut viverra bibendum lorem, at tempus nibh mattis
          </p>
          <p style={{ marginBottom: "-10px" }}>
            <IoCheckmarkSharp className="reactIcon" />
            quis nostrud exercitation ullamco laboris nisi
          </p>
          <p style={{ marginBottom: "-10px" }}>
            <IoCheckmarkSharp className="reactIcon" />
            Duis aute irure and dolor in reprehenderit.
          </p>
          <p style={{ marginBottom: "-10px" }}>
            <IoCheckmarkSharp className="reactIcon" />
            ante rutrum sed the is sodales augue consequat.
          </p>
        </div>

        {/* enroll section */}
        <div className="Enroll_secB border rounded">
          <h3>Classes Includes</h3>

          <div>
            <p>
              <MdOutlineSignalCellularAlt className="reactIcon" /> Age
            </p>
            <p>3-5 Year</p>
          </div>

          <div>
            <p>
              <MdOutlineWatchLater className="reactIcon" /> Duration
            </p>
            <p>9:00 - 11:00</p>
          </div>

          <div>
            <p>
              <GrNotes className="reactIcon" /> Lessons
            </p>
            <p>15</p>
          </div>

          <div>
            <p>
              <FaUserGroup className="reactIcon" /> Students
            </p>
            <p>50</p>
          </div>

          <div>
            <p>
              <FaMedal className="reactIcon" /> Certifications
            </p>
            <p>Yes</p>
          </div>

          <div>
            <p>
              <TfiWorld className="reactIcon" /> Language
            </p>
            <p>English</p>
          </div>

          <button
            type="button"
            className="courseFree_btn"
            style={{ marginBottom: "20px" }}
          >
            This Course Free $49.00
          </button>
          <button type="button" className="courseFree_btn">
            Enroll Your Kid
          </button>

          <p className="mediaLinks">
            Share:{" "}
            <span>
              <FaSquareFacebook className="mediaIcon" />{" "}
              <FaTwitterSquare className="mediaIcon" />{" "}
              <BsLinkedin className="mediaIcon" />{" "}
              <FaInstagramSquare className="mediaIcon" />
            </span>
          </p>
        </div>
      </div>

      {/* component footer */}
      <div className="componentFooter">
        <img
          src="src/assets/p-author.webp"
          alt="author"
          style={{ width: "200px", height: "200px" }}
        />
        <div>
          <h3>Savannah Nguyen</h3>
          <p>Children Diet</p>
          <p>
            Adipiscing elit. Mauris viverra nisl quis mollis laoreet. Ut eget
            lacus a felis accumsan pharetra in dignissim enim. In amet odio
            mollis urna aliquet volutpat. Sed bibendum nisl vehicula imperdiet
            imperdiet, augue massa fringilla.
          </p>
          <div className="userInfo">
            <p>Experience: 10 Years</p>
            <p>
              <FaUser className="reactIcon" /> 188 Students
            </p>
            <p>
              <FaStar className="reactIcon" /> 454 (36 Review)
            </p>
          </div>
          <p style={{ marginTop: "20px" }}>
            Share:{" "}
            <span style={{ fontSize: "30px", marginLeft: "20px" }}>
              <FaSquareFacebook className="mediaIcon" />{" "}
              <FaTwitterSquare className="mediaIcon" />{" "}
              <BsLinkedin className="mediaIcon" />{" "}
              <FaInstagramSquare className="mediaIcon" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;

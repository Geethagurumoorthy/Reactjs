import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import teacher1 from "./assets/teacher1.jpg";
import teacher2 from "./assets/teacher2.jpg";
import teacher3 from "./assets/teacher3.jpg";
import teacher4 from "./assets/teacher4.jpg";
import teacher5 from "./assets/teacher5.jpg";
import teacher6 from "./assets/teacher6.jpg";
import teacher7 from "./assets/teacher7.jpg";
import teacher8 from "./assets/teacher8.jpg";

import "./App.css";
import "./teach.css";

/* =====================================================
   TEACHERS
===================================================== */

const teachers = [
  {
    id: 1,
    name: "Brooklyn Simmons",
    role: "Instructors",
    image: teacher1,
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    role: "Instructors",
    image: teacher2,
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 3,
    name: "Ronald Richards",
    role: "Instructors",
    image: teacher3,
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 4,
    name: "Kristin Watson",
    role: "Instructors",
    image: teacher4,
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 5,
    name: "Jenny Wilson",
    role: "Instructors",
    image: teacher5,
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 6,
    name: "Robert Fox",
    role: "Instructors",
    image: teacher6,
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 7,
    name: "Cody Fisher",
    role: "Instructors",
    image: teacher7,
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 8,
    name: "Esther Howard",
    role: "Instructors",
    image: teacher8,
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
];

/* =====================================================
   NAVBAR
===================================================== */

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Kidsa
      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <div className="teacher-menu">

          <span>
            Teacher ▾
          </span>

          <div className="teacher-dropdown">

            <Link to="/our-teacher">
              Our Teacher
            </Link>

            <Link to="/teacher-carousel">
              Teacher Carousel
            </Link>

            <Link to="/teacher-details">
              Teacher Details
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}

/* =====================================================
   BANNER
===================================================== */

function Banner({ title }) {
  return (
    <section className="banner">

      <div className="banner-content">

        <h1>
          {title}
        </h1>

        <p>
          Home <span>›</span> {title}
        </p>

      </div>

      <div className="cloud">
        ☁️
      </div>

      <div className="balloon">
        🎈
      </div>

      <div className="bee">
        🐝
      </div>

      <div className="child">
        👧
      </div>

    </section>
  );
}

/* =====================================================
   HOME / MAIN TEACHER
===================================================== */

function Home() {
  return (
    <div>

      <Banner title="Teacher" />

      <section className="home-teacher">

        <h1>
          Teacher
        </h1>

        <p>
          Welcome to our teacher section.
        </p>

        <Link
          to="/our-teacher"
          className="home-button"
        >
          View Our Teachers
        </Link>

      </section>

    </div>
  );
}

/* =====================================================
   OUR TEACHER
===================================================== */

function OurTeacher() {

  const [openSocial, setOpenSocial] = useState(null);

  return (
    <div>

      <Banner title="Our Teacher" />

      <section className="teacher-section">

        <div className="section-title">

          <h1>
            Our Teacher
          </h1>

          <p>
            Meet Our Teachers
          </p>

        </div>


        <div className="teacher-grid">

          {teachers.map((teacher, index) => (

            <div
              className="teacher-card"
              key={teacher.id}
              style={{
                animationDelay:
                  `${index * 0.15}s`
              }}
            >

              <Link
                to={`/teacher-details/${teacher.id}`}
              >

                <div className="teacher-image">

                  <img
                    src={teacher.image}
                    alt={teacher.name}
                  />

                  <div
                    className="share-button"
                    onClick={(e) => {
                      e.preventDefault();

                      setOpenSocial(
                        openSocial === teacher.id
                          ? null
                          : teacher.id
                      );
                    }}
                  >
                    ↗
                  </div>

                  {openSocial === teacher.id && (

                    <div
                      className="social-buttons"
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                    >

                      <a
                        href={teacher.facebook}
                        target="_blank"
                        rel="noreferrer"
                      >
                        f
                      </a>

                      <a
                        href={teacher.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        ◎
                      </a>

                      <a
                        href={teacher.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        in
                      </a>

                    </div>

                  )}

                  <div className="wave"></div>

                </div>

                <h2>
                  {teacher.name}
                </h2>

                <p>
                  {teacher.role}
                </p>

              </Link>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

/* =====================================================
   TEACHER CAROUSEL
===================================================== */

function TeacherCarousel() {

  const [index, setIndex] = useState(0);

  const maxIndex = teachers.length - 4;


  const next = () => {

    if (index < maxIndex) {

      setIndex(index + 1);

    } else {

      setIndex(0);

    }

  };


  const prev = () => {

    if (index > 0) {

      setIndex(index - 1);

    } else {

      setIndex(maxIndex);

    }

  };


  return (
    <div>

      <Banner title="Teacher Carousel" />

      <section className="teacher-section">

        <div className="carousel-container">

          <button
            className="arrow left"
            onClick={prev}
          >
            &#10094;
          </button>


          <div className="carousel-wrapper">

            <div
              className="teacher-track"
              style={{
                transform:
                  `translateX(-${index * 25}%)`,
              }}
            >

              {teachers.map((teacher) => (

                <Link
                  to={`/teacher-details/${teacher.id}`}
                  className="teacher-card"
                  key={teacher.id}
                >

                  <div className="teacher-image">

                    <img
                      src={teacher.image}
                      alt={teacher.name}
                    />

                    <button
                      className="share"
                      onClick={(e) =>
                        e.preventDefault()
                      }
                    >
                      ↗
                    </button>

                    <div className="image-wave"></div>

                  </div>

                  <h3>
                    {teacher.name}
                  </h3>

                  <p>
                    Instructors
                  </p>

                </Link>

              ))}

            </div>

          </div>


          <button
            className="arrow right"
            onClick={next}
          >
            &#10095;
          </button>

        </div>


        <div className="dots">

          {Array.from({
            length: maxIndex + 1
          }).map((_, i) => (

            <button
              key={i}
              className={
                index === i
                  ? "dot active"
                  : "dot"
              }
              onClick={() =>
                setIndex(i)
              }
            ></button>

          ))}

        </div>

      </section>

    </div>
  );
}

/* =====================================================
   TEACHER DETAILS
===================================================== */

function TeacherDetails() {

  const location = useLocation();

  const lastPart =
    location.pathname.split("/").pop();

  const selectedId =
    Number(lastPart);

  const selectedTeacher =
    teachers.find(
      (teacher) =>
        teacher.id === selectedId
    ) || teachers[6];


  return (
    <div>

      <Banner title="Teacher Details" />


      {/* MAIN DETAILS */}

      <section className="details">

        <div className="teacher-main">

          <img
            src={selectedTeacher.image}
            alt={selectedTeacher.name}
          />


          <div className="teacher-info">

            <h2>
              {selectedTeacher.name}
            </h2>

            <h4>
              Children Diet
            </h4>

            <p>
              Adipiscing elit. Mauris viverra
              nisl quis mollis laoreet. Ut eget
              lacus a felis accumsan pharetra
              in dignissim enim.
            </p>

            <div className="stats">

              <span>
                Experience: 10 Years
              </span>

              <span>
                👤 188 Students
              </span>

              <span>
                ⭐ 454 (36 Review)
              </span>

            </div>


            <div className="social">

              <a
                href={selectedTeacher.facebook}
                target="_blank"
                rel="noreferrer"
              >
                f
              </a>

              <a
                href="#"
                onClick={(e) =>
                  e.preventDefault()
                }
              >
                𝕏
              </a>

              <a
                href={selectedTeacher.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                in
              </a>

              <a
                href="#"
                onClick={(e) =>
                  e.preventDefault()
                }
              >
                ▶
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* PROFESSIONAL INFO */}

      <section className="professional">

        <div className="professional-text">

          <h2>
            Professional Info
          </h2>

          <p>
            Consectetur adipisicing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, made of
            owl the quis nostrud exercitation
            ullamco laboris nisi ut aliquip.
          </p>

          <p>
            The is ipsum dolor sit amet
            consectetur adipisicing elit.
            Fusce eleifend porta arcu in hac
            augue ehabitasse the is platea
            augue.
          </p>

        </div>


        <div className="skills">

          {/* CREATIVITY */}

          <div className="skill">

            <div>

              <span>
                Creativity
              </span>

              <b>
                90%
              </b>

            </div>

            <div className="bar">

              <i
                style={{
                  width: "90%"
                }}
              ></i>

            </div>

          </div>


          {/* TIME MANAGEMENT */}

          <div className="skill">

            <div>

              <span>
                Time Management
              </span>

              <b>
                70%
              </b>

            </div>

            <div className="bar">

              <i
                style={{
                  width: "70%"
                }}
              ></i>

            </div>

          </div>


          {/* ART AND CRAFT */}

          <div className="skill">

            <div>

              <span>
                Art And Carft
              </span>

              <b>
                55%
              </b>

            </div>

            <div className="bar">

              <i
                style={{
                  width: "55%"
                }}
              ></i>

            </div>

          </div>

        </div>

      </section>


      {/* RELATED TEACHER */}

      <RelatedTeacher />

    </div>
  );
}

/* =====================================================
   RELATED TEACHER
===================================================== */

function RelatedTeacher() {

  const [relatedIndex, setRelatedIndex] =
    useState(0);

  const relatedTeachers = [
    teachers[2],
    teachers[3],
    teachers[0],
    teachers[1],
    teachers[4],
    teachers[5],
    teachers[6],
    teachers[7],
  ];

  const maxRelated =
    relatedTeachers.length - 4;


  const nextRelated = () => {

    if (relatedIndex < maxRelated) {

      setRelatedIndex(
        relatedIndex + 1
      );

    } else {

      setRelatedIndex(0);

    }

  };


  const prevRelated = () => {

    if (relatedIndex > 0) {

      setRelatedIndex(
        relatedIndex - 1
      );

    } else {

      setRelatedIndex(maxRelated);

    }

  };


  return (
    <section className="related">

      <div className="related-title">

        <h2>
          Related Teacher
        </h2>

        <div>

          <button
            onClick={prevRelated}
          >
            ←
          </button>

          <button
            onClick={nextRelated}
          >
            →
          </button>

        </div>

      </div>


      <div className="related-wrapper">

        <div
          className="related-grid"
          style={{
            transform:
              `translateX(-${relatedIndex * 25}%)`,
          }}
        >

          {relatedTeachers.map(
            (teacher) => (

              <Link
                to={`/teacher-details/${teacher.id}`}
                className="related-card"
                key={teacher.id}
              >

                <div className="related-image">

                  <img
                    src={teacher.image}
                    alt={teacher.name}
                  />

                  <button
                    className="share"
                    onClick={(e) =>
                      e.preventDefault()
                    }
                  >
                    ↗
                  </button>

                  <div className="small-wave"></div>

                </div>

                <h3>
                  {teacher.name}
                </h3>

                <p>
                  Instructors
                </p>

              </Link>

            )
          )}

        </div>

      </div>


      <div className="related-dots">

        {Array.from({
          length: maxRelated + 1
        }).map((_, i) => (

          <button
            key={i}
            className={
              relatedIndex === i
                ? "active"
                : ""
            }
            onClick={() =>
              setRelatedIndex(i)
            }
          ></button>

        ))}

      </div>

    </section>
  );
}

/* =====================================================
   APP
===================================================== */

function Teach() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/our-teacher"
          element={<OurTeacher />}
        />

        <Route
          path="/teacher-carousel"
          element={<TeacherCarousel />}
        />

        <Route
          path="/teacher-details"
          element={<TeacherDetails />}
        />

        <Route
          path="/teacher-details/:id"
          element={<TeacherDetails />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default Teach;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowLeftTwoTone,
  ArrowRightTwoTone,
  KeyboardArrowUp,
} from "@mui/icons-material";
import React from "react";
import Slider from "react-slick";
import "./Home.css";
import { Link } from "react-router-dom";
import banner from "../../Images/Banner/banner.png";
import Packages from "../../components/Packages/Packages";
import SearchTour from "../../components/SearchTour/SearchTour";

import { Fab } from "@mui/material";
import ScrollToTop from "./ScrollToTop";
import About from "../About/About";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <ArrowRightTwoTone />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <ArrowLeftTwoTone />
    </div>
  );
};
const Home = (props) => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* //    <!-- ======= hero Section ======= --> */}

      <div id="hero" className="container-carousel">
        {" "}
        <Slider {...settings}>
          <div id="back-to-top-anchor">
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">
                  WORLDS LARGES TRAVEL PLATFORM{" "}
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  MEET NEW PEOPLE. SEE THE WORLD. NO PLANNING REQUIRED.
                </p>
                <a
                  href="/"
                  className="mb-2 scrollto animate__animated animate__fadeInUp"
                >
                  <img className="mb-3" height="80" src={banner} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">
                  DISCOVER THE WORLD YOU HAVE NEVER SEEN
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  MEET NEW PEOPLE. SEE THE WORLD. NO PLANNING REQUIRED.
                </p>
                <a
                  href="/"
                  className="mb-2 scrollto animate__animated animate__fadeInUp"
                >
                  <img className="mb-3" height="80" src={banner} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">
                  PACK AND GO AWESOME TOURS
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  GROUP TRAVEL FOR PEOPLE WHO DON'T DO GROUP TRAVEL.
                </p>
                <a
                  href="/"
                  className="mb-2 scrollto animate__animated animate__fadeInUp"
                >
                  <img className="mb-3" height="80" src={banner} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">
                  TRAVEL SOLO, NOT ALONE
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  LOVE WHERE YOU'RE GOING BOOK INCREDIBLE THINGS TO DO AROUND
                  THE WORLD.
                </p>
                <a
                  href="/"
                  className="mb-2 scrollto animate__animated animate__fadeInUp"
                >
                  <img className="mb-3" height="80" src={banner} alt="" />
                </a>
              </div>
            </div>
          </div>
        </Slider>
        <Link
          to="/"
          className="btn-get-started scrollto animate__animated animate__fadeInUp"
        >
          Travel With Us
        </Link>
      </div>
      {/* //------------------------Packages / Services--------------------------------- */}
      <SearchTour />
      <Packages />
      <About />

      {/* /* ---------------------------------- //map ---------------------------------  */}

      <div className="map p-2">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="map"
              width="600"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=kawlar%20bazar&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            <br />
            <a href="https://www.embedgooglemap.net">google map for free</a>
          </div>
        </div>
      </div>

      <ScrollToTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollToTop>
    </>
  );
};

export default Home;

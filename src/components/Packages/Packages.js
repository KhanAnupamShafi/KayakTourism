import {
  CalendarToday,
  FlightTakeoffRounded,
  FlightTwoTone,
  LoyaltySharp,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Packages.css";

const Packages = () => {
  const [tours, setTours] = useState([]);
  const [loaded, setLoaded] = useState(true);
  console.log(loaded);
  useEffect(() => {
    fetch("https://shrieking-skeleton-21491.herokuapp.com/tours")
      .then((response) => response.json())
      .then((data) => {
        setLoaded(false);
        setTours(data);
      });
  }, []);

  console.log(tours);

  return (
    <div>
      {/* <!-- ======= Packages ======= -->Section ======= --> */}

      {loaded ? (
        /* --------------------------------- spinner -------------------------------- */
        <div className="spinner-border text-secondary fs-1" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          {tours?.map((tour) => (
            <div key={tour?._id} className="reviews-area">
              <div
                className="row g-0"
                style={{
                  background: `url(${tour?.image}) no-repeat center center fixed`,

                  backgroundSize: "cover",
                  // backgroundPosition: `top center`,
                  // backgroundAttachment: "fixed",
                }}
              >
                <div className="col-lg-6">
                  <div className="px-5 py-5 py-lg-0 tour_info">
                    <div className="portfolio-item filter-app portfolio-item d-sm-none d-md-block">
                      <div className="single-awesome-project">
                        <div className="awesome-img">
                          <Link to="/booking">
                            <img
                              src="https://i.ibb.co/rdQ1HCF/burj-al-arab-club-suite-living-room-2-16-9-landscape.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="add-actions text-top">
                            <div className="project-dec">
                              <Link
                                className="portfolio-lightbox"
                                data-gallery="myGallery"
                                to="/booking"
                              >
                                <FlightTwoTone color="primary" />
                                <h4>{tour?.location}</h4>

                                <div className="d-flex m-auto justify-content-center gap-5 mt-5 align-items-center">
                                  <Typography
                                    variant="h5"
                                    component="p"
                                    color="red"
                                  >
                                    ${tour?.price} <span>/Person</span>
                                  </Typography>
                                  <Typography
                                    variant="h5"
                                    component="p"
                                    sx={{ textDecoration: "none" }}
                                  >
                                    <CalendarToday fontSize="large" />
                                    {tour?.days}+ Nights
                                  </Typography>
                                </div>

                                <button
                                  type="button"
                                  className="btn btn-warning text-primary mt-5"
                                >
                                  <span className="badge badge-dark text-success">
                                    <LoyaltySharp /> -15%
                                  </span>
                                  Offer{" "}
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 work-right-text d-flex align-items-center">
                  <div className="px-5 py-4 py-lg-0">
                    <h5>{tour?.title}</h5>

                    <button
                      type="button"
                      className="btn btn-outline-light btn-sm  text-danger fs-3"
                    >
                      <span className="badge badge-dark text-info animate__animated animate__fadeInDown">
                        <FlightTakeoffRounded />
                      </span>
                      {tour?.location}
                    </button>

                    <Typography
                      my={4}
                      className="animate__animated animate__fadeInUp"
                      variant="subtitle2"
                      component="p"
                      color="info.light"
                    >
                      {tour?.description}
                    </Typography>

                    <Link
                      to={`/booking/${tour?._id}`}
                      className="ready-btn scrollto animate__animated animate__fadeInUp"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Packages;

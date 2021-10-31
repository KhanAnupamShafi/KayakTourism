import React, { useEffect, useState } from "react";
import {
  CalendarViewWeekSharp,
  FlightSharp,
  KingBedOutlined,
  LocationSearchingTwoTone,
  LoyaltyRounded,
  MapOutlined,
  Person,
  PhoneAndroid,
} from "@mui/icons-material/";
import useAuth from "../../hooks/useAuth";
import "./Booking.css";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { useParams } from "react-router-dom";
import icon_one from "../../Images/Icons/locations.png";
import icon_two from "../../Images/Icons/save.png";
import icon from "../../Images/Icons/schedule.png";

//validation
const validateSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  address: Yup.string().required("location is required"),
  date: Yup.string().required("date is required"),
  contact: Yup.string().required("contact no. is required"),
});

const Booking = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [tour, setTour] = useState({});
  //   const [status, setStatus] = useState('pending');
  console.log(tour);

  useEffect(() => {
    fetch(`https://shrieking-skeleton-21491.herokuapp.com/tour/info/${id}`)
      .then((response) => response.json())
      .then((data) => setTour(data));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validateSchema) });
  const onSubmit = (data) => {
    data.user = user?.displayName;
    data.status = "pending";
    data.package_id = tour?._id;
    data.package_title = tour?.title;
    data.package_location = tour?.location;
    data.package_image = tour?.image;
    data.package_price = tour?.price;

    axios
      .post("https://shrieking-skeleton-21491.herokuapp.com/orders", data)
      .then((res) => {
        //  console.log(res);
        if (res.data.insertedId) {
          alert("Added Succefully");
          reset();
        }
      });

    console.log(data);
  };

  return (
    <>
      <div id="start" className="mt-7 py-0 position-relative">
        <div
          className="bg-holder w-50 bg-right d-none d-lg-block"
          style={{
            background: `url(${tour?.image}) no-repeat center`,
            //   backfaceVisibility: "hidden",
            //   backgroundSize: "cover",
          }}
        ></div>
        {/* <!--/.bg-holder--> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-5 py-xl-5 py-xxl-7">
              <h1 className="display-3 text-1000 fw-normal">
                Let’s make a trip to
              </h1>
              <h1 className="display-3 text-primary fw-bold">
                {tour?.location}
              </h1>
              <div className="pt-5">
                <nav>
                  <div
                    className="nav nav-tabs voyage-tabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <MapOutlined />
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      <FlightSharp />
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      <KingBedOutlined />
                    </button>
                  </div>

                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active "
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="row g-4 mt-5 text-start"
                      >
                        <div id="nav-tabContent">
                          {user?.email && (
                            <Box>
                              <Typography
                                variant="h5"
                                color="warning"
                                component="p"
                              >
                                Hello,{" "}
                                <small style={{ color: "#CF5300" }}>
                                  {user.displayName}
                                </small>
                              </Typography>
                              <Typography variant="subtitle1">
                                You logged in from:{" "}
                                <span style={{ color: "#ffF5300" }}>
                                  {user.email}
                                </span>
                              </Typography>
                            </Box>
                          )}
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label className="form-label" htmlFor="name">
                              <Person /> Name
                            </label>
                            <input
                              id="name"
                              type="text"
                              placeholder="Full Name"
                              {...register("name")}
                              className={`form-control input-box form-voyage-control ${
                                errors.name ? "is-invalid" : ""
                              }`}
                            />
                            <div className="invalid-feedback">
                              {errors.name?.message}
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label className="form-label" htmlFor="address">
                              <LocationSearchingTwoTone /> Location
                            </label>
                            <input
                              id="address"
                              type="text"
                              {...register("address")}
                              className={`form-control input-box form-voyage-control ${
                                errors.address ? "is-invalid" : ""
                              }`}
                              placeholder="Your Address"
                            />
                            <div className="invalid-feedback">
                              {errors.address?.message}
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label
                              className="form-label"
                              htmlFor="inputdateOne"
                            >
                              <span className="nav-link-icon text-800 fs--1">
                                <CalendarViewWeekSharp />
                              </span>{" "}
                              Select Date
                            </label>
                            <input
                              id="inputdateOne"
                              type="date"
                              {...register("date")}
                              className={`form-control input-box form-voyage-control ${
                                errors.date ? "is-invalid" : ""
                              }`}
                            />
                            <div className="invalid-feedback">
                              {errors.date?.message}
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <label className="form-label" htmlFor="mobile">
                            <PhoneAndroid /> Contact No.
                          </label>
                          <input
                            id="mobile"
                            type="number"
                            placeholder="Phone/ mobile no."
                            {...register("contact")}
                            className={`form-control input-box form-voyage-control ${
                              errors.contact ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.contact?.message}
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5 visually-hidden">
                          <label htmlFor="email">Email:</label>
                          <input
                            type="text"
                            id="email"
                            name="email"
                            value={user?.email}
                            {...register("email")}
                            readOnly
                          />
                          <br />
                          <br />
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              htmlFor="inputPersonOne"
                            >
                              Person
                            </label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPersonOne"
                              {...register("total_guests")}
                            >
                              <option defaultValue="selected">1 Adult</option>
                              <option>2 Adults</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select>
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-user"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 col-xl-10 col-lg-12 d-grid mt-6">
                          <button className="btn btn-danger" type="submit">
                            Confirem Booking
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /* ----------------------------- <detail section ----------------------------  */}

      <div className="container-fluid py-0 overflow-hidden ">
        <div className="row">
          <div className="col-lg-6 px-0">
            <img
              className="img-fluid border-md-0 mb-4 h-100 fit-cover"
              src="https://i.ibb.co/P4xvytJ/ireland.png"
              alt="..."
            />
          </div>
          <div className="col-lg-6 px-0 bg-secondary-gradient bg-offcanvas-right">
            <div className="mx-6 mx-xl-8 my-8">
              <div className="align-items-center d-block d-flex mb-5">
                <img
                  className="img-fluid me-3 me-md-2 me-lg-4 d-none d-sm-block"
                  src={icon_one}
                  alt="..."
                />
                <div className="flex-1 align-items-center pt-2">
                  <h5 className="fw-bold text-light">
                    Visit the greatest places in
                  </h5>
                  <Typography variant="h4" color="secondary">
                    {tour?.location}
                  </Typography>
                </div>
              </div>
              <div className="align-items-center d-block d-flex mb-5">
                <img
                  className="img-fluid me-3 me-md-2 me-lg-4 d-none d-sm-block"
                  src={icon}
                  alt="..."
                />
                <div className="flex-1 align-items-center py-2">
                  <h5 className="fw-bold text-light lh-lg">
                    <LoyaltyRounded /> Offer Includes{" "}
                    <span style={{ fontSize: "1.5em", color: "#400" }}>
                      {tour?.days}
                    </span>{" "}
                    package <br /> starting from{" "}
                    <span style={{ fontSize: "1.5em", color: "#400" }}>
                      ${tour?.price}
                    </span>{" "}
                    only
                  </h5>
                </div>
              </div>
              <div className="align-items-center d-block d-flex mb-5">
                <img
                  className="img-fluid me-3 me-md-2 me-lg-4 d-none d-sm-block"
                  src={icon_two}
                  alt="..."
                />

                <div className="flex-1 align-items-center pt-2">
                  <h5 className="fw-bold text-light">
                    Save <span style={{ color: "red" }}>50%</span> on your next
                    trip
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;

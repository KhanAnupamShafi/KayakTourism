import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddTours from "../../components/AddTours/AddTours";
import ManageTours from "../../components/ManageTours/ManageTours";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [control, setControl] = useState("manageAll");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <div className={toggle ? "sb-sidenav-toggled" : ""}>
      <div
        className="d-flex m-auto container-fluid p-0 justify-content-center"
        id="wrapper"
      >
        {/* <!-- Sidebar--> */}
        <div
          className="border-end"
          id="sidebar-wrapper"
          style={{ backgroundColor: "#35364e" }}
        >
          <div
            className="sidebar-heading border-bottom fw-bold"
            style={{ color: "#9ab3ca" }}
          >
            Admin Dashboard
          </div>
          <div className="list-group list-group-flush">
            <a
              onClick={() => setControl("manageAll")}
              component="button"
              className="list-group-item list-group-item-action list-group-item-dark p-3"
              href="#!"
            >
              Manage All Tours
            </a>
            <a
              onClick={() => setControl("addNew")}
              component="button"
              className="list-group-item list-group-item-action list-group-item-dark p-3"
              href="#!"
            >
              Add New Tours
            </a>
            <a
              onClick={() => setControl("stat")}
              component="button"
              className="list-group-item list-group-item-action list-group-item-dark p-3"
              href="#!"
            >
              Status
            </a>
          </div>
        </div>
        {/* <!-- Page content wrapper--> */}
        <div id="page-content-wrapper">
          {/* <!-- Top navigation--> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container-fluid">
              <button
                onClick={() => handleToggle()}
                className="btn btn-warning btn-sm"
                id="sidebarToggle"
              >
                Toggle Menu
              </button>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <nav className="breadcrumb navbar-nav ms-auto mt-2 mt-lg-0">
                  <ol className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="breadcrumb-item nav-item active">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="breadcrumb-item">
                      <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Data
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </nav>
          {/* <!-- Page content--> */}
          <div className="container-fluid">
            {control === "manageAll" && <ManageTours />}
            {control === "addNew" && <AddTours />}
            {control === "stat" && <h1>Status events</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

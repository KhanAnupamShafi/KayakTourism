import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div id="wrapper" className="container-fluid">
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>The page you requested for is not found.</p>
                <h1>404 - Not Found</h1>
              </div>
              <button className="btn mt-4  text-light btn-primary">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Back to Home
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import { PeopleTwoTone, TaskAlt, TourOutlined } from "@mui/icons-material";
import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats" id="stats">
      <div className="layer py-md-5 py-5">
        <div className="container py-lg-5 py-md-3">
          <div className="row stat-grids">
            <div className="col-lg-6 stats-left">
              <h3 className="heading mb-4 text-li">Years in the field</h3>
              <p className="mb-3">
                Integer pulvinar leo id viverra feugiat. Pellentesque libero
                justo, semper at tempus vel, ultrices in ligula. Nulla sollicit
                sed.
              </p>
              <h4>
                <span>15+</span> Years of Experience
              </h4>
            </div>
            <div className="col-lg-6 grid1 stats-right mt-lg-0 mt-4 pl-5">
              <div className="row">
                <div className="col-sm-4 col-6 mb-4">
                  <p className="text-li">Travel joy</p>
                  <h4 className="text-wh">12k</h4>
                  <PeopleTwoTone fontSize="large" />
                </div>
                <div className="col-sm-4 col-6 mb-4">
                  <p>world tours</p>
                  <h4>15k</h4>
                  <TaskAlt fontSize="large" />
                </div>
                <div className="col-sm-4 col-6 mb-4">
                  <p>city tours</p>
                  <h4>25k</h4>
                  <TourOutlined fontSize="large" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

import { FormatQuoteTwoTone } from "@mui/icons-material";
import React from "react";
import Stats from "../../components/Stats/Stats";
import imgOne from "../../Images/avaters/avatar1.png";
import imgTwo from "../../Images/avaters/avatar2.png";
import imgThree from "../../Images/avaters/avatar3.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <Stats />
      {/* <!--/testimonials --> */}
      <section className="testimonials py-5" id="testimonials">
        <div className="container py-md-5">
          <h3 className="heading heading1 text-center mb-3 mb-sm-5">
            {" "}
            Client Reviews
          </h3>
          <div className="row">
            <div className="col-lg-4 col-sm-6 test-info text-info text-left mb-4">
              <p>
                <FormatQuoteTwoTone /> "I have done several other solo travel
                tour companies and without a doubt I can say Kayak takes the top
                rank. KAYAK sets a new bar for what a best-in-class travel
                experience and itinerary should look like."{" "}
                <FormatQuoteTwoTone />
              </p>
              <div className="test-img text-right mb-3">
                <img src={imgOne} className="img-fluid" alt="user-" />
              </div>
              <h3 className="my-md-2 my-3 text-right">Jenifer Burns</h3>
            </div>
            <div className="col-lg-4 col-sm-6 test-info  text-info text-left mb-4">
              <p>
                <FormatQuoteTwoTone /> I am so excited to be planning another
                trip with KAYAK while in Italy! I can't express enough how great
                of an experience this was! If you are debating, just press
                book!!!! <FormatQuoteTwoTone />
              </p>

              <div className="test-img text-right mb-3">
                <img src={imgTwo} className="img-fluid" alt="user2" />
              </div>
              <h3 className="my-md-2 my-3 text-right"> Abraham Smith</h3>
            </div>
            <div className="col-lg-4 col-sm-6 test-info  text-info text-left gap1 mb-4">
              <p>
                <FormatQuoteTwoTone /> My Lapland experience with Kayak was
                seriously one of the greatest experiences of my entire life.
                They have my complete trust and I am beyond excited for the next
                adventure. Cheers to amazing times!! <FormatQuoteTwoTone />
              </p>
              <div className="test-img text-right mb-3">
                <img src={imgThree} className="img-fluid" alt="user3" />
              </div>
              <h3 className="my-md-2 my-3 text-right">Jenifer Burns</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

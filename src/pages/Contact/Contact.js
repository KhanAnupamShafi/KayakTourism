import { LocationOnSharp, MessageSharp, Phone } from "@mui/icons-material";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div id="contact" className="contact-area">
        <div className="contact-inner area-padding">
          <div className="contact-overly"></div>
          <div className="container ">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline py-5 text-center">
                  <h1>Contact us</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="contact-icon text-center">
                  <div className="single-icon">
                    <Phone />
                    <p>
                      Call: +1 5589 55488 55
                      <br />
                      <span>Monday-Friday (9am-5pm)</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-icon text-center">
                  <div className="single-icon">
                    <MessageSharp />
                    <p>
                      Email: info@example.com
                      <br />
                      <span>Web: www.example.com</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-icon text-center">
                  <div className="single-icon">
                    <LocationOnSharp />
                    <p>
                      Location: A108 Kawlar Bazar Street
                      <br />
                      <span>BD 1929 Bangladesh</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <iframe
                  title="map"
                  src="https://i.ibb.co/KFzGK4P/scandinavia.png"
                  width="100%"
                  height="380"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="col-md-6">
                <div className="form contact-form">
                  <form className="php-email-form">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              frameBorder="0"
              scrolling="no"
            ></iframe>
            <br />
            <a href="https://www.embedgooglemap.net">google map for free</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

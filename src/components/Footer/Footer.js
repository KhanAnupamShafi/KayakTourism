import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    // <!-- ======= Footer ======= -->
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-content">
                <div className="footer-head">
                  <div className="footer-logo">
                    <h2>
                      <span>Kayak</span>Tourism
                    </h2>
                  </div>

                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                  </p>
                  <div className="footer-icons">
                    <ul>
                      <li>
                        <a href="/">
                          <Facebook />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <Twitter />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <Instagram />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <LinkedIn />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end single footer --> */}
            <div className="col-md-4">
              <div className="footer-content">
                <div className="footer-head">
                  <h4>information</h4>
                  <p>
                    Want to read more reviews? See our pages on Facebook,
                    Instagram and Yelp.
                  </p>
                  <div className="footer-contacts">
                    <p>
                      <span>Tel:</span> +123 456 789
                    </p>
                    <p>
                      <span>Email:</span> contact@example.com
                    </p>
                    <p>
                      <span>Working Hours:</span> 9am-5pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end single footer --> */}
            <div className="col-md-4">
              <div className="footer-content">
                <div className="footer-head">
                  <h4>Instagram</h4>
                  <div className="flicker-img">
                    <a href="/">
                      <img src="https://i.ibb.co/WH4yFmf/rome.jpg" alt="" />
                    </a>
                    <a href="/">
                      <img
                        src="https://i.ibb.co/Wz2d9fT/animal-Shelter.png"
                        alt=""
                      />
                    </a>
                    <a href="/">
                      <img
                        src="https://i.ibb.co/2kkpMw0/bird-House.png"
                        alt=""
                      />
                    </a>
                    <a href="/">
                      <img
                        src="https://i.ibb.co/nfbDcL7/child-Support.png"
                        alt=""
                      />
                    </a>
                    <a href="/">
                      <img
                        src="https://i.ibb.co/DrsggSZ/luca-bravo-O453-M2-Liufs-unsplash.jpg"
                        alt=""
                      />
                    </a>
                    <a href="/">
                      <img
                        src="https://i.ibb.co/nwTfNGh/clearn-Park.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-area-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="copyright text-center">
                <p>
                  &copy; Copyright <strong>Khan Anupam Shafi</strong>. All
                  Rights Reserved
                </p>
              </div>
              <div className="credits">
                Looking for an adult study abroad experience? Check out our new
                brand Sojrn. Feel free to leave your info for occasional
                reminders that you need a vacation. Also so we can let you know
                about new trips, deals, and events. Name Email Subscribe Now ©
                2021 by KAYAK TRAVEL, Dhaka, Bangadesh | HELLO@FTLOTRAVEL.COM
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

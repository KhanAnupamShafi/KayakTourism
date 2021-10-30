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
                      <span>e</span>Business
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
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="bi bi-linkedin"></i>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
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
                      <img src="https://i.ibb.co/7v4L9y3/babySit.png" alt="" />
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
                        src="https://i.ibb.co/tZPFHk1/clean-Water.png"
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
                  &copy; Copyright <strong>eBusiness</strong>. All Rights
                  Reserved
                </p>
              </div>
              <div className="credits">
                All the links in the footer should remain intact. You can delete
                the links only if you purchased the pro version. Licensing
                information: https://bootstrapmade.com/license/ Purchase the pro
                version with working PHP/AJAX contact form:
                https://bootstrapmade.com/buy/?theme=eBusiness Designed by{" "}
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

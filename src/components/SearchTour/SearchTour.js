import React from "react";
import "./SearchTour.css";

const SearchTour = () => {
  return (
    <section className="awe-section pd-0">
      <div className="container">
        <div className="py-5">
          <h2 className="fs-1 fw-bolder pb-4">Check Out Our Trips</h2>
          <p className="fs-5">
            From scavenger hunts around Angkor to cruises along the Mekong at
            sunset and exclusive cultural encounters.
            <br />
            <br />
            In other words, you can do your own thing when you want but still
            have people to get dinner with at the end of the day. ​<br /> We
            spend countless hours curating the best locations, accommodations,
            activities, and food, <br /> then we put awesome groups together and
            take care of the details on the trip so you can relax, explore, and
            connect. ​ <br /> <br /> You can expect chill vibes, new friends,
            and unforgettable experiences. <br /> We run each trip as if we were
            traveling with our own friends - because by the end of it, we are. ​
            <br />
          </p>
        </div>
      </div>
      <div className="box-search-wrapper bg-dark pb-4">
        <div className="container mb-5 pt-5">
          {/* <!-- box-search --> */}
          <div className="row">
            <div className="col">
              <div className="home_content text-center">
                <div className="booking_form_container">
                  <form action="#" className="booking_form" id="booking_form">
                    <div className="d-flex flex-xl-row flex-column align-items-start justify-content-start">
                      <div className="booking_input_container d-flex flex-row align-items-start justify-content-start flex-wrap">
                        <div>
                          <input
                            type="text"
                            className="datepicker booking_input booking_input_a booking_in"
                            placeholder="Where"
                            required="required"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            className="booking_input booking_input_a booking_out"
                            placeholder="When"
                            required="required"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            className="booking_input booking_input_b"
                            placeholder="Children"
                            required="required"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            className="booking_input booking_input_b"
                            placeholder="Room"
                            required="required"
                          />
                        </div>
                      </div>
                      <div>
                        <button className="booking_button trans_200">
                          Search Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchTour;

import { CancelOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  console.log("booking", bookings + user.email);

  //get personal bookings info

  useState(() => {
    fetch(
      `https://shrieking-skeleton-21491.herokuapp.com/bookings/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  //delete event

  const handleDelete = (id) => {
    //cancel bookings

    fetch(`https://shrieking-skeleton-21491.herokuapp.com/tour/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Successfully deleted");
          const remaining = bookings.filter((booked) => booked._id !== id);
          setBookings(remaining);
        }
      });
  };

  return (
    <div className="position-relative mt-5 pt-5">
      <div className="cart-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="cart-table-wrap">
                <table className="cart-table table">
                  <thead className="cart-table-head">
                    <tr className="table-head-row">
                      <th className="product-remove">Cancel</th>
                      <th className="product-image">Product Image</th>
                      <th className="product-name">Package Name</th>
                      <th className="product-quantity">Destination</th>
                      <th className="product-price">price</th>
                      <th className="product-total">Guests</th>
                      <th className="product-total">Status</th>
                    </tr>
                  </thead>

                  {bookings?.map((booked) => (
                    <tbody key={booked?._id}>
                      <tr className="table-body-row">
                        <td
                          className="product-remove"
                          style={{ backgroundColor: "#d32f2f" }}
                        >
                          <Button
                            onClick={() => handleDelete(booked._id)}
                            variant="contained"
                            color="warning"
                            sx={{ boxShadow: "none" }}
                          >
                            <CancelOutlined /> <small>Cancel Booking</small>
                          </Button>
                        </td>
                        <td className="product-image">
                          <img src={booked?.package_image} alt="" />
                        </td>
                        <td className="product-name">
                          {booked?.package_title}
                        </td>
                        <td className="product-quantity">
                          {booked?.package_location}
                        </td>
                        <td className="product-price">
                          ${booked?.package_price}
                        </td>
                        <td className="product-total">
                          {booked?.total_guests}
                        </td>
                        <td className="product-total">
                          {booked?.status === "approved" ? (
                            <Button variant="contained" color="success">
                              {booked?.status}
                            </Button>
                          ) : (
                            <Button variant="contained" color="warning">
                              {booked?.status}
                            </Button>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="total-section ">
                <table className="total-table table ">
                  <thead className="total-table-head ">
                    <tr className="table-total-row">
                      <th>Total</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="total-data">
                      <td>
                        <strong>Subtotal: </strong>
                      </td>
                      <td>$500</td>
                    </tr>
                    <tr className="total-data">
                      <td>
                        <strong>Shipping: </strong>
                      </td>
                      <td>$45</td>
                    </tr>
                    <tr className="total-data">
                      <td>
                        <strong>Total: </strong>
                      </td>
                      <td>$545</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart-buttons">
                  <Button href="checkout.html" className="boxed-btn black">
                    Check Out
                  </Button>
                </div>
              </div>

              <div className="coupon-section">
                <h3>Apply Coupon</h3>
                <div className="coupon-form-wrap">
                  <form action="index.html">
                    <p>
                      <input type="text" placeholder="Coupon" />
                    </p>
                    <p>
                      <input type="submit" value="Apply" />
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;

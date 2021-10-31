import { CancelOutlined, CheckCircleRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";

const ManageTours = () => {
  const [bookings, setBookings] = useState([]);

  // console.log(bookings);

  //get All bookings info

  useState(() => {
    fetch(`https://shrieking-skeleton-21491.herokuapp.com/bookings/`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  //delete event

  const handleDelete = (id) => {
    console.log(id);
    //cancel bookings

    fetch(`https://shrieking-skeleton-21491.herokuapp.com/tour/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Successfully deleted");
          const remaining = bookings?.filter((booked) => booked._id !== id);
          setBookings(remaining);
        }
      });
  };

  /* --------------- update event ------------ */

  const handleUpdateStatus = (book) => {
    book.status = "approved";

    fetch(
      `https://shrieking-skeleton-21491.herokuapp.com/tour/update/${book._id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(book),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
          const notAproved = bookings?.filter(
            (booked) => booked.status !== "approved"
          );
          const approved = bookings?.filter(
            (booked) => booked.status === "approved"
          );
          setBookings(notAproved.concat(approved));
        }
      });
  };

  return (
    <div>
      <h1 className="mt-4">Manage All Tours</h1>
      <div className="position-relative mt-5 pt-5">
        <div className="cart-section mt-150 mb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="cart-table-wrap">
                  <table className="cart-table table">
                    <thead className="cart-table-head">
                      <tr className="table-head-row">
                        <th className="product-remove">Cancel</th>
                        <th className="product-remove">Aprove</th>
                        <th className="">User Name/ Email</th>
                        <th className="">Product Image</th>
                        <th className="product-name">Package Name</th>
                        <th className="product-quantity">Destination</th>
                        <th className="product-price">price</th>
                        <th className="product-total">Guests</th>
                        <th className="product-total">Status</th>
                      </tr>
                    </thead>

                    {bookings?.map((booked, idx) => (
                      <tbody key={idx}>
                        <tr className="table-body-row">
                          <td
                            className="product-remove"
                            style={{ backgroundColor: "#333333" }}
                          >
                            <Button
                              onClick={() => handleDelete(booked?._id)}
                              variant="contained"
                              color="error"
                              sx={{ boxShadow: "none" }}
                              size="large"
                            >
                              <CancelOutlined /> <small>Cancel </small>
                            </Button>
                          </td>
                          <td
                            className="product-remove"
                            style={{ backgroundColor: "#333333" }}
                          >
                            <Button
                              onClick={() => handleUpdateStatus(booked)}
                              variant="contained"
                              size="large"
                              color="success"
                            >
                              <CheckCircleRounded /> <small>Approve</small>
                            </Button>
                          </td>
                          <td className="product-name">
                            {booked?.user} <br />
                            {booked?.email}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTours;

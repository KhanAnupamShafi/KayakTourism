import React, { useEffect, useState } from "react";
import "./Header.css";

import {
  AccountCircle,
  CardMembershipRounded,
  Close,
  EmailOutlined,
  InboxTwoTone,
  LocalPhone,
  LoginSharp,
  LogoutOutlined,
  MailOutline,
  MenuRounded,
} from "@mui/icons-material";
import logo from "../../Images/Logo/logo_two.svg";

import { Link } from "react-router-dom";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [booked, setBooked] = useState([]);

  // sign in event

  const { user, handleLogOut } = useAuth();
  console.log("from header: ", user);

  // Scroll Event

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  //ger total orders

  //get personal bookings info

  useState(() => {
    fetch(
      `https://shrieking-skeleton-21491.herokuapp.com/bookings/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setBooked(data.length));
  }, [user.email]);

  return (
    <div className="super_container ">
      {/* !-- Header --> */}
      <div className="header-one " style={{ backgroundColor: "#CF5300" }}>
        <div className="container">
          <div className="logo-area">
            <div className="row flex-column flex-md-row align-items-center justify-content-between">
              <div className="lh-1 col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                <a className="d-block px-1" href="index.html">
                  <img height="100" loading="lazy" src={logo} alt="my logo" />
                </a>
              </div>

              <div className="col-lg-9 header-right ">
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between">
                  {" "}
                  <div>
                    <ul className="top-info-box flex-nowrap">
                      <li>
                        <div className="info-box">
                          <div className="info-box-content">
                            <p className="info-box-title">
                              <LocalPhone fontSize="small" /> Call Us
                            </p>
                            <p className="info-box-subtitle">
                              <a href="tel:(+9) 847-291-4353">
                                (+9) 847-291-4353
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="info-box">
                          <div className="info-box-content">
                            <p className="info-box-title">
                              <EmailOutlined fontSize="small" /> Email Us
                            </p>
                            <p className="info-box-subtitle">
                              <a href="mailto:office@Constra.com">
                                office@kayaktourism.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="d-none d-lg-block last">
                        <div className="info-box last">
                          <div className="info-box-content flex-nowrap">
                            <p className="info-box-title">
                              <CardMembershipRounded fontSize="small" /> Global
                              Certificate
                            </p>
                            <p className="info-box-subtitle">ISO 9001:2017</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="header-get-a-quote mb-2 mb-lg-0 d-flex flex-column flex-md-row align-items-start p-0-lg">
                    {user?.email && (
                      <Box>
                        <button
                          className="user-admin mb-2 "
                          size="small"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          color="inherit"
                          sx={{ display: "inline", flexDirection: "row" }}
                        >
                          <AccountCircle /> Hello, {user?.displayName}
                        </button>
                        <Link
                          className="px-3 mt-2 mt-xs-0"
                          style={{
                            marginRight: "10px",
                            textDecoration: "none",
                          }}
                          to="/dashboard"
                        >
                          <Button variant="contained" color="warning">
                            Admin Dashboard
                          </Button>
                        </Link>
                      </Box>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className={scrolled ? "header scrolled navbar-fixed" : "header"}>
        {/* /* ---------------------------- //end toolbar nav ---------------------------  */}

        <div className="header_content d-flex flex-row align-items-center justify-content-between">
          {/* Logo */}
          <div className="logo">
            <a href="/">
              <svg
                className="svg-image"
                role="img"
                style={{
                  width: "inherit",
                  height: "inherit",
                  lineHeight: "inherit",
                  color: "inherit",
                }}
                viewBox="0 0 125 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 24h23.936V0H0v24zm25.266 0h23.936V0H25.266v24zm49.202 0H50.532V0h23.936v24zm1.33 0h23.936V0H75.798v24zM125 24h-23.936V0H125v24z"
                  fill="#FF690F"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.287 11.549V6H7.38v12h2.907v-5.548L13.348 18h3.208l-3.33-6 3.33-6h-3.208l-3.061 5.549zm24.785 4.724L34.552 18h-3.104l3.947-12h3.696l3.93 12h-3.194l-.52-1.727h-4.235zm2.117-6.837l-1.4 4.48h2.8l-1.4-4.48zM63.98 18h-2.906v-5.29L57.144 6h3.463l1.938 3.688L64.447 6h3.409l-3.876 6.71V18zm21.624-1.727L85.084 18h-3.105l3.948-12h3.696l3.93 12h-3.194l-.52-1.727h-4.235zm2.117-6.837l-1.4 4.48h2.8l-1.4-4.48zm23.63 2.113V6h-2.907v12h2.907v-5.548L114.412 18h3.208l-3.33-6 3.33-6h-3.208l-3.061 5.549z"
                  fill="#FAFAFC"
                ></path>
              </svg>
            </a>
          </div>
          <div className="ml-auto d-flex flex-row align-items-center justify-content-start">
            <nav className="main_nav">
              <ul className="d-flex flex-row align-items-center justify-content-start">
                <li>
                  <NavLink
                    to="/home"
                    className=""
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#CF5300",
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className=""
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#CF5300",
                    }}
                  >
                    Why Choose us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className=""
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#CF5300",
                    }}
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className=""
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#CF5300",
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
                {user?.email && (
                  <li>
                    <Link
                      to="/bookings"
                      className="d-flex align-items-start justify-content-center gap-4 link-primary"
                    >
                      <button
                        type="button"
                        className="btn btn-primary position-relative"
                      >
                        My Bookings
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {booked}
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </button>
                      <Avatar
                        alt="avatar"
                        sx={{ cursor: "pointer" }}
                        src={user.photoURL}
                      />
                    </Link>
                  </li>
                )}
              </ul>
            </nav>

            {user?.email ? (
              <Box className="d-none d-lg-block">
                <div className="signout_btn">
                  <Button
                    onClick={handleLogOut}
                    size="larger"
                    variant="contained"
                    color="error"
                  >
                    <LogoutOutlined fontSize="inherit" /> Sign Out
                  </Button>
                </div>
              </Box>
            ) : (
              <div className="book_button">
                <Link to="/register">
                  <LoginSharp /> Sign In
                </Link>
              </div>
            )}

            {/* <!-- Hamburger Menu --> */}

            <div className="hamburger d-lg-none">
              <MenuRounded
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer}
                className={classes.menuButton}
              />
            </div>

            {/* /* ---------------------- Mobile -Tab responsive drawer ---------------------  */}

            <Drawer
              className={classes.drawer}
              classes={{
                paper: classes.drawerPaper,
              }}
              anchor="left"
              open={open}
              onClose={toggleDrawer}
            >
              <div>
                <Close
                  onClick={toggleDrawer}
                  className="menu_close"
                  sx={{ fontSize: 40, color: "#f3e5f5" }}
                />
              </div>
              <div className={classes.toolbar} />
              <Toolbar>
                <svg
                  className="svg-image"
                  role="img"
                  style={{
                    width: "inherit",
                    height: "inherit",
                    lineHeight: "inherit",
                    color: "inherit",
                  }}
                  viewBox="0 0 125 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 24h23.936V0H0v24zm25.266 0h23.936V0H25.266v24zm49.202 0H50.532V0h23.936v24zm1.33 0h23.936V0H75.798v24zM125 24h-23.936V0H125v24z"
                    fill="#FF690F"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.287 11.549V6H7.38v12h2.907v-5.548L13.348 18h3.208l-3.33-6 3.33-6h-3.208l-3.061 5.549zm24.785 4.724L34.552 18h-3.104l3.947-12h3.696l3.93 12h-3.194l-.52-1.727h-4.235zm2.117-6.837l-1.4 4.48h2.8l-1.4-4.48zM63.98 18h-2.906v-5.29L57.144 6h3.463l1.938 3.688L64.447 6h3.409l-3.876 6.71V18zm21.624-1.727L85.084 18h-3.105l3.948-12h3.696l3.93 12h-3.194l-.52-1.727h-4.235zm2.117-6.837l-1.4 4.48h2.8l-1.4-4.48zm23.63 2.113V6h-2.907v12h2.907v-5.548L114.412 18h3.208l-3.33-6 3.33-6h-3.208l-3.061 5.549z"
                    fill="#FAFAFC"
                  ></path>
                </svg>
              </Toolbar>
              <Divider />
              <Divider />
              <List>
                <ListItem component={Link} to="/">
                  <ListItemIcon>
                    <InboxTwoTone />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem component={Link} to="/bookings">
                  <ListItemIcon>
                    <InboxTwoTone />
                  </ListItemIcon>
                  <ListItemText primary="My Bookings" />
                </ListItem>

                {user?.email ? (
                  <ListItem>
                    <ListItemIcon>
                      <InboxTwoTone />
                    </ListItemIcon>

                    <ListItemText
                      onClick={handleLogOut}
                      className="btn btn-primary"
                      primary="Sign Out"
                    />
                  </ListItem>
                ) : (
                  <ListItem component={Link} to="/register">
                    <ListItemIcon>
                      <InboxTwoTone />
                    </ListItemIcon>
                    <ListItemText
                      className="btn btn-primary"
                      primary="Sign In"
                    />
                  </ListItem>
                )}
              </List>
              <Divider />
              <List sx={{ color: "primary.main" }}>
                {["All Bookings", "Add Tours", "Spam"].map((text, index) => (
                  <ListItem component={Link} to="/dashboard" button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxTwoTone /> : <MailOutline />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </div>
        </div>
      </header>

      {/* <!-- End --> */}
    </div>
  );
};

export default Header;

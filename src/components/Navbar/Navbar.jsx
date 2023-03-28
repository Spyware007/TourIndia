import React from "react";
import classes from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import img from "../../assets/images/logo.jpg";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const isUserAuthenticated = location?.state;
  const [active, setActive] = useState(false);
  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.inner_navbar}>
          <NavLink to="/">
            <div className={classes.brand}>
              <div className={classes.brand_logo}>
                <img src={img} alt="logo" className={classes.logo} />
              </div>
              <span className={classes.brand_title}>TourIn</span>
            </div>
          </NavLink>
          <ul
            className={
              active
                ? `${classes.navbar_items} ${classes.navbar_mitems}`
                : `${classes.navbar_items}`
            }
          >
            <li
              className={`${classes.navbar_item} `}
              onClick={() => {
                setActive((prevValue) => !prevValue);
              }}
            >
              <NavLink to="/" className={classes.link_text}>
                Home
              </NavLink>
            </li>
            <li
              className={`${classes.navbar_item} `}
              onClick={() => {
                setActive((prevValue) => !prevValue);
              }}
            >
              <NavLink to="/explore" className={classes.link_text}>
                Destinations
              </NavLink>
            </li>
            <li
              className={`${classes.navbar_item} `}
              onClick={() => {
                setActive((prevValue) => !prevValue);
              }}
            >
              <NavLink to="/blogs" className={classes.link_text}>
                Experiences
              </NavLink>
            </li>
            <li
              className={`${classes.navbar_item} `}
              onClick={() => {
                setActive((prevValue) => !prevValue);
              }}
            >
              <NavLink to="/about" className={classes.link_text}>
                About Us
              </NavLink>
            </li>
            <li
              className={`${classes.navbar_item} `}
              onClick={() => {
                setActive((prevValue) => !prevValue);
              }}
            >
              <NavLink to="/contact" className={classes.link_text}>
                Contact
              </NavLink>
            </li>

            <li
              className={`${classes.navbar_item} `}
              onClick={() => {
                setActive((prevValue) => !prevValue);
              }}
            >
              <NavLink to="/login" className={classes.link_text}>
                {isUserAuthenticated ? "" : "LogIn"}
              </NavLink>
            </li>
            <li className={classes.links}></li>
          </ul>
          <div
            className={classes.hamburger}
            onClick={() => {
              setActive((prevValue) => !prevValue);
            }}
          >
            <svg
              className={
                active
                  ? `${classes.ham} ${classes.hamRotate} ${classes.ham1} ${classes.active}`
                  : `${classes.ham} ${classes.hamRotate} ${classes.ham1}`
              }
              viewBox="0 0 100 100"
              width="80"
            >
              <path
                className={`${classes.line} ${classes.top}`}
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
              />
              <path
                className={`${classes.line} ${classes.middle}`}
                d="m 30,50 h 40"
              />
              <path
                className={`${classes.line} ${classes.bottom}`}
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

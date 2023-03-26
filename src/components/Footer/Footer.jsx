import React from "react";
import classes from "./Footer.module.css";
import img from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import linkedin from "../../assets/Socials/linkedin-2.svg";
import twitter from "../../assets/Socials/twitter.svg";
import instagram from "../../assets/Socials/instagram.svg";
import whatsapp from "../../assets/Socials/whatsapp.svg";
import youtube from "../../assets/Socials/youtube.svg";
import footerpng from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <>
      <div className={classes.footer_container}>
        <div>
          <img src={footerpng} alt="" />
        </div>
        <footer className={classes.outer_box}>
          <div className={classes.row1}>
            <NavLink to="/">
              <div className={classes.brand}>
                <div className={classes.brand_logo}>
                  <img src={img} alt="logo" className={classes.logo} />
                </div>
                <span className={classes.brand_title}>TourIn</span>
              </div>
            </NavLink>
            <div className={classes.social}>
              <h3 className={classes.social_text}>Find Us On Social Media:</h3>
              <ul className={classes.social_links}>
                <li className={classes.socia_link}>
                  <a
                    href="https://www.linkedin.com/in/om-gawande/"
                    target="blank"
                  >
                    <img className={classes.li_link} src={linkedin}></img>
                  </a>
                </li>
                <li className={classes.socia_link}>
                  <a
                    href="https://www.linkedin.com/in/om-gawande/"
                    target="blank"
                  >
                    <img className={classes.ig_link} src={instagram}></img>
                  </a>
                </li>
                <li className={classes.socia_link}>
                  <a
                    href="https://www.linkedin.com/in/om-gawande/"
                    target="blank"
                  >
                    <img className={classes.wp_link} src={whatsapp}></img>
                  </a>
                </li>
                <li className={classes.socia_link}>
                  <a
                    href="https://www.linkedin.com/in/om-gawande/"
                    target="blank"
                  >
                    <img className={classes.twi_link} src={twitter}></img>
                  </a>
                </li>
                <li className={classes.socia_link}>
                  <a
                    href="https://www.linkedin.com/in/om-gawande/"
                    target="blank"
                  >
                    <img className={classes.yt_link} src={youtube}></img>
                  </a>
                </li>
              </ul>
            </div>
            <div className={classes.text_mail}>
              <h2 className={classes.text}>We&apos;re Always Happy To Help</h2>
              <h2 className={classes.mail}>tourinindia@gmail.com</h2>
            </div>
          </div>
          <div className={classes.separator}></div>
          <div className={classes.row2}>Copyright © 2023 TourIn</div>
        </footer>
      </div>
    </>
  );
};

export default Footer;

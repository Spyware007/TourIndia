import React, { useEffect } from "react";
import { Button } from "../common/index";
import classes from "./Landing.module.css";
import hero from "../../assets/images/hero.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Landing = () => {
  useEffect(() => {
    AOS.init({ once: false });
  });
  return (
    <>
      <div className={classes.landing}>
        <div className={classes.column1}>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className={classes.para}
          >
            Explore our India
          </p>
          <h1
            // data-aos="fade-up"
            // data-aos-duration="1200"
            className={classes.heading}
          >
            {"From Historical cities to natural splendours."
              .split("")
              .map((l, i) => {
                return (
                  <span
                    data-aos="fade-up"
                    data-aos-duration={`${i * 50}`}
                    data-aos-delay={`${i * 50}`}
                    key={i}
                  >
                    {l}
                  </span>
                );
              })}
            {/* From Historical cities to natural splendours. */}
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-duration="1400"
            className={classes.subheading}
          >
            India is a home to the finest architectural heritage, serene ghats,
            spectacular landscapes and largest tiger reserve
          </h2>
          <div className={classes.btn_container}>
            <a href="/explore">
              <Button
                label="Explore"
                padding="16px 32px"
                bgColor="#327c8e"
                color="#fff"
                fontSize="24px"
              />
            </a>
            <a href="/contact">
              <Button
                label="Contact Us"
                padding="16px 32px"
                bgColor="#fff"
                color="#000"
                fontSize="24px"
              />
            </a>
          </div>
        </div>
        <div className={classes.column2}>
          <img src={hero} alt="" />
        </div>
      </div>
    </>
  );
};

export default Landing;

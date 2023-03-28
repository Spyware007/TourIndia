import React from "react";
import classes from "./About.module.css";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <>
      <section className={classes.card}>
        <div className={classes.card_content}>
          <div className={classes.card_body}>
            <h1 className={classes.card_title}>
              Get <span className={classes.purple}>insights</span> that helps
              you plan your trip.
            </h1>
            <p className={classes.card_description}>
              Discover the benefits of data analytics and make better decisions
              regarding trips, best places in India, and overall enjoyment.
            </p>
            <div className={classes.stats}>
              <div className={classes.stats_item}>
                <h3 className={classes.stats_number}>10k+</h3>
                <p className={classes.stats_name}>visitors</p>
              </div>
              <div className={classes.stats_item}>
                <h3 className={classes.stats_number}>314</h3>
                <p className={classes.stats_name}>places</p>
              </div>
              <div className={classes.stats_item}>
                <h3 className={classes.stats_number}>12m+</h3>
                <p className={classes.stats_name}>hotels</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.card_img}>
          <img className={classes.about_img} src={about} alt="about" />
        </div>
      </section>
    </>
  );
};

export default About;

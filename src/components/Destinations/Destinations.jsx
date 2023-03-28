import React from "react";
import classes from "./Destinations.module.css";
import one from "../../assets/tours/1.png";
import two from "../../assets/tours/2.jpg";
import three from "../../assets/tours/3.jpg";
import four from "../../assets/tours/4.webp";
import five from "../../assets/tours/5.webp";

const Destinations = () => {
  return (
    <>
      <div className={classes.destination_container}>
        <div className={classes.header}>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className={classes.text1}
          >
            Destinations
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            className={classes.text2}
          >
            Chose your place
          </p>
        </div>
        <div className={classes.outer_box}>
          <div className={classes.row1}>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className={classes.big_box}
            >
              <img className={classes.big_box_img} src={one} alt="" />
              <div className={classes.text_container}>
                <p className={classes.text3}>Taj Mahal</p>
                <p className={classes.text4}>Agra</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className={classes.big_box}
            >
              <img className={classes.big_box_img} src={two} alt="" />
              <div className={classes.text_container}>
                <p className={classes.text3}>Red Fort</p>
                <p className={classes.text4}>Delhi</p>
              </div>
            </div>
          </div>
          <div className={classes.row2}>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className={classes.small_box}
            >
              <img className={classes.small_box_img} src={four} alt="" />
              <div className={classes.text_container}>
                <p className={classes.text3}> Earth Centre</p>
                <p className={classes.text4}>Kollam</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className={classes.small_box}
            >
              <img className={classes.small_box_img} src={three} alt="" />
              <div className={classes.text_container}>
                <p className={classes.text3}>Statue of Unity</p>
                <p className={classes.text4}>Gujarat</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className={classes.small_box}
            >
              <img className={classes.small_box_img} src={five} alt="" />
              <div className={classes.text_container}>
                <p className={classes.text3}>Maravanthuruthu</p>
                <p className={classes.text4}>kerala</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;

import React, { useEffect, useState } from "react";
import { FeaturedData } from "../../assets/FeaturedData";
import Card from "../common/Card/Card";
import classes from "./Featured.module.css";
import http from "../../api";
import Swal from "sweetalert2";

const Featured = () => {
  const [tourData, setTourData] = useState(null);
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      http.get("/tour/getTours").then((response) => {
        const data = response.data.tours;
        setLoading(false);
        setTourData(data);
        setTest(data);
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Unable to fetch the jobs",
        text: error,
      });
    }
  };

  useEffect(() => {
    getData();
    console.log(tourData);
  }, []);
  return (
    <>
      <div className={classes.featured_container}>
        <div className={classes.header}>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className={classes.text1}
          >
            Featureds
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            className={classes.text2}
          >
            Most Popular Tours
          </p>
        </div>
        <div className={classes.cards_container}>
          {tourData?.map((place, i) => {
            return <Card data={place} show={false} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Featured;

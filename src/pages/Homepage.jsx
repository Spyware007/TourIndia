import React from "react";
import { NavLink } from "react-router-dom";
import { Blogs, Destinations, Featured, Landing } from "../components";
import { Button } from "../components/common";

const Homepage = () => {
  return (
    <>
      <Landing />
      <Destinations />

      <Featured />
      <NavLink to={"/explore"}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            margin: "40px 0",
          }}
        >
          <Button label="Show More" />
        </div>
      </NavLink>
      <Blogs />
      <NavLink to={"/blogs"}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            margin: "40px 0",
          }}
        >
          <Button label="Show More" />
        </div>
      </NavLink>
    </>
  );
};

export default Homepage;

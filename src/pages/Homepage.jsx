import React from "react";
import { Blogs, Destinations, Featured, Landing } from "../components";

const Homepage = () => {
  return (
    <>
      <Landing />
      <Destinations />
      <Featured />
      <Blogs />
    </>
  );
};

export default Homepage;

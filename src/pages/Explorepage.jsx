import React from "react";
import { Destinations, Featured } from "../components";
import { Button } from "../components/common";

const Explorepage = () => {
  return (
    <>
      <Destinations />
      <Featured />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          margin: "100px 0",
        }}
      >
        <Button label="Show More" />
      </div>
    </>
  );
};

export default Explorepage;

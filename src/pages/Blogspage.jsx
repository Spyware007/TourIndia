import React from "react";
import { Blogs } from "../components";
import { Button } from "../components/common";

const Blogspage = () => {
  return (
    <>
      <Blogs />
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

export default Blogspage;

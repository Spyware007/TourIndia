import React from "react";
import Contacts from "./Contacts/Contacts";
import classes from "./Hidden.module.css";
import PostTours from "./PostTours/PostTours";

const Hidden = () => {
  return (
    <>
      <div className={classes.hidden}>
        <PostTours />
        <Contacts />
      </div>
    </>
  );
};

export default Hidden;

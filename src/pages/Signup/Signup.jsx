import React from "react";
import { useState } from "react";
import classes from "./Signup.module.css";
import { NavLink } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { Button } from "../../components/common/index";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <div className={classes.mainSection}>
        <div className={classes.innerSection}>
          <div className={classes.buttonSwitch}>
            <button className={`${classes.signupButton} ${classes.active}`}>
              <NavLink to="/signup">Sign Up</NavLink>
            </button>
            <button className={`${classes.loginButton}`}>
              <NavLink to="/login">Log In</NavLink>
            </button>
          </div>
          <form className={classes.signupForm}>
            {/* <label className={classes.inputLabel}>Name <span className={classes.mandatory}>*</span></label> */}
            <div className={classes.inputField}>
              <AiOutlineUser
                className={classes.container}
                size={42}
                color="#767676"
              />
              <input
                type="text"
                className={classes.inputAns}
                placeholder="Your Name or UserName"
              />
            </div>

            {/* <label className={classes.inputLabel}>Email <span className={classes.mandatory}>*</span></label> */}
            <div className={classes.inputField}>
              <AiOutlineMail
                className={classes.container}
                size={42}
                color="#767676"
              />
              <input
                type="text"
                className={classes.inputAns}
                placeholder="Your Email"
              />
            </div>

            {/* <label className={classes.inputLabel}>Password <span className={classes.mandatory}>*</span></label> */}
            <div className={classes.inputField}>
              <AiOutlineLock
                className={classes.container}
                size={42}
                color="#767676"
              />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className={classes.inputAns}
                placeholder="Enter Password"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className={classes.togglePassword}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={24} color="#767676" />
                ) : (
                  <AiOutlineEye size={24} color="#767676" />
                )}{" "}
              </button>
            </div>

            <div className={classes.buttonContainer}>
              <Button
                label="Submit"
                padding="10px 32px"
                fontSize="24px"
                bgColor="#9f62ff"
                className={classes.submitButton}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

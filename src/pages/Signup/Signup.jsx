import React, { useEffect } from "react";
import http from "../../api";
import Swal from "sweetalert2";

import { useState } from "react";
import classes from "./Signup.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { Button } from "../../components/common/index";

const Signup = () => {
  const redirect = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password, password2 } = user;

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitUserHandler = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      // AlertContext.setAlert("Please enter all fields", "danger"); add a state
    } else if (password !== password2) {
      // AlertContext.setAlert("Passwords do not match", "danger"); add a state
    } else {
      try {
        await registerUser({ name, email, password });
        redirect("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const registerUser = (name, email, password) => {
    try {
      http.post("/user/api/user/signup", user).then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your query is sent to us.",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
          });
        }
      );
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    }
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      // AlertContext.setAlert("Please enter all fields", "danger"); add a state
    } else {
      try {
        await registerUser({ name, email, password });
        redirect("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    console.log(user);
  });

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
          <form onSubmit={onSubmitHandler} className={classes.signupForm}>
            {/* <label className={classes.inputLabel}>Name <span className={classes.mandatory}>*</span></label> */}
            <div className={classes.inputField}>
              <AiOutlineUser
                className={classes.container}
                size={42}
                color="#767676"
              />
              <input
                type="text"
                value={name}
                name="name"
                onChange={onChangeHandler}
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
                value={email}
                name="email"
                onChange={onChangeHandler}
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
                value={password}
                onChange={onChangeHandler}
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

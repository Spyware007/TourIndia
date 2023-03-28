import React, { useEffect, useState } from "react";
import classes from "./Login.module.css";
import { NavLink } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { Button } from "../../components/common/index";
import { useNavigate } from "react-router-dom";
import http from "../../api";
import Swal from "sweetalert2";

const Login = () => {
  const redirect = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitUserHandler = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      // AlertContext.setAlert("Please enter all fields", "danger"); add a state
      // AlertContext.setAlert("Passwords do not match", "danger"); add a state
    } else {
      try {
        await loginUser({ email, password });
        setIsUserAuthenticated(true);
        redirect("/admin", { state: isUserAuthenticated });
      } catch (error) {
        redirect("/", { state: isUserAuthenticated });
        console.log(error);
      }
    }
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      // AlertContext.setAlert("Please enter all fields", "danger"); add a state
      // AlertContext.setAlert("Passwords do not match", "danger"); add a state
    } else {
      try {
        await login({ email, password });
        redirect("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    console.log(user);
  });

  const loginUser = (email, password) => {
    try {
      http.post("/user/api/user/login", user).then(
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
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className={classes.mainSection}>
        <div className={classes.innerSection}>
          <div className={classes.buttonSwitch}>
            <button className={`${classes.signupButton}`}>
              <NavLink to="/signup">Sign Up</NavLink>
            </button>
            <button className={`${classes.loginButton} ${classes.active}`}>
              <NavLink to="/login"> Log In</NavLink>
            </button>
          </div>
          <form onSubmit={onSubmitUserHandler} className={classes.loginForm}>
            {/* <label className={classes.inputLabel}>Email <span className={classes.mandatory}>*</span></label> */}
            <div className={classes.inputField}>
              <AiOutlineUser
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
                )}
              </button>
            </div>
            <div className={classes.forgotPassword}>
              <a href="">Forgot Password ?</a>
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

export default Login;

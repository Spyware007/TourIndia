import React, { useState } from "react";
import classes from "./Contact.module.css";
import http from "../../api";
import Swal from "sweetalert2";

import { Button, Input, Textarea } from "../common";
import {
  FaLocationArrow,
  FaEnvelope,
  FaMobileAlt,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const { name, email, phoneNo, message } = contact;

  const onChangeHandler = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phoneNo === "" || message === "") {
      // AlertContext.setAlert("Please enter all fields", "danger"); add a state
      alert("Please fill all  the fields");
    }
    try {
      http.post("/contact/createContact", contact).then(
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
    setContact({
      name: "",
      email: "",
      phoneNo: "",
      message: "",
    });
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.form}>
          <div className={classes.contact_info}>
            <h3 className={classes.title}>We would love to hear from you ! </h3>
            <p className={classes.text}>
              We&apos;re here to answer any questions you may have about our
              services. Reach out to us and we'll respond as soon as we can.
              Thank you for your interest in our services!
            </p>
            <div className={classes.info}>
              <div className={classes.information}>
                <FaMobileAlt className={classes.icon} />
                <p>+1 (555) 555-5555.</p>
              </div>
              <div className={classes.information}>
                <FaEnvelope className={classes.icon} />
                <p>tourinindia@gmail.com</p>
              </div>
              <div className={classes.information}>
                <FaLocationArrow className={classes.icon} />
                <p>Pune, Maharashtra</p>
              </div>
            </div>

            <div className={classes.social_media}>
              <p>Connect with us : </p>
              <div className={classes.social_icons}>
                <a
                  href="https://www.linkedin.com/in/om-gawande/"
                  target="blank"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/om-gawande/"
                  target="blank"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.linkedin.com/in/om-gawande/"
                  target="blank"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className={classes.contact_form}>
            <span className={`${classes.circle} ${classes.one}`}></span>
            <span className={`${classes.circle} ${classes.two}`}></span>

            <form onSubmit={submitHandler}>
              <h3 className={classes.title}>Contact Us</h3>
              <Input
                onChange={onChangeHandler}
                type="text"
                value={name}
                label="Name"
                name="name"
                required
              />
              <Input
                onChange={onChangeHandler}
                type="text"
                value={email}
                label="Email"
                name="email"
                required
              />
              <Input
                onChange={onChangeHandler}
                type="text"
                value={phoneNo}
                label="Mobile Number"
                name="phoneNo"
                required
              />
              <Textarea
                onChange={onChangeHandler}
                type="text"
                value={message}
                label="Your Message"
                name="message"
                required
              />
              <div className={classes.button}>
                <Button
                  padding="8px 24px"
                  fontSize="18px"
                  label="Send"
                  bgColor="#fff"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

import React from "react";
import classes from "./Button.module.css";

const Button = ({
  margin,
  children,
  onClick,
  label,
  disabled,
  filled,
  color = "#fff",
  padding = "15px 30px",
  fontSize = "20px",
  bgColor,
  link,
}) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.btn_container}
      >
        <button
          style={{
            margin: margin,
            padding: padding,
            fontSize: fontSize,
            backgroundColor: bgColor,
            color: color,
          }}
          className={filled ? classes.fill : classes.btn}
          onClick={onClick}
          disabled={disabled}
        >
          {label || children}
        </button>
      </a>
    </>
  );
};

export default Button;

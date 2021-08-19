import React from "react";
import classes from "./OrderInfo.module.css";
import iconMusic from "../assets/images/icon-music.svg";

const OrderInfo = () => {
  return (
    <div className={classes["order-info"]}>
      <div class="icon">
        <img src={iconMusic} alt="icon music" />
      </div>
      <div className={classes["order-text"]} >
        <h2>Annual Plan</h2>
        <p>$59.99/year</p>
      </div>
      <a href="dsd" className="link">
        Change
      </a>
    </div>
  );
};

export default OrderInfo;

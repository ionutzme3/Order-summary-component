import React from "react";
import Button from "./Button";
import OrderInfo from "./OrderInfo";

import classes from "./OrderWrapper.module.css";

const OrderWrapper = () => {
  return (
    <div className={classes["order-wrapper"]}>
      <h1>Order Summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <OrderInfo />
      <Button />
      <p className={classes.cancel}>Cancel Order</p>
    </div>
  );
};

export default OrderWrapper;

import React from "react";

import ilustration from "../assets/images/illustration-hero.svg";
import classes from "./HeaderImage.module.css";
const HeaderImage = () => {
    return (
        <img className={classes.img} src={ilustration} alt="header image" />
    );
};

export default HeaderImage;
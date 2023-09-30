import React from 'react'
import Facebook from "../../shared/Icon/Facebook";
import Instagram from "../../shared/Icon/Instagram";
import Email from "../../shared/Icon/Email";

import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.contact}>
                <p>Contact us:</p>
                <Email/>
            </div>
            <div className={classes.follow}>
                <p>Follow us:</p>
                <Facebook/>
                <Instagram/>
            </div>

        </footer>
    );
};

export default Footer;
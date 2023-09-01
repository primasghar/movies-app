import classes from "./Footer.module.css";
import Facebook from "../../shared/Icon/Facebook";
import Instagram from "../../shared/Icon/Instagram";
import Email from "../../shared/Icon/Email";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.contact}>
                <h3>Contact us:</h3>
                <Email className={classes.email}/>

            </div>
            <div  className={classes.follow} >
                <h3>Follow us:</h3>
               <Facebook className={classes.socialMedia1}/>
                <Instagram  className={classes.socialMedia}  />
            </div>

        </div>
    );
};

export default Footer;
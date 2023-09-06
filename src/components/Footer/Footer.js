import classes from "./Footer.module.css";
import Facebook from "../../shared/Icon/Facebook";
import Instagram from "../../shared/Icon/Instagram";
import Email from "../../shared/Icon/Email";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.contact}>
                <p>Contact us:</p>
                <Email className={classes.email}/>

            </div>
            <div  className={classes.follow} >
                <p>Follow us:</p>
               <Facebook className={classes.socialMedia1}/>
                <Instagram  className={classes.socialMedia}  />
            </div>

        </footer>
    );
};

export default Footer;
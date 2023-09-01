import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div>
                <p>Follow us</p>
                <span>Twitter</span>
                <span>Facebook</span>
                <span>Instagram</span>
            </div>
            <div>
                <p>Contact us</p>
                <span>email</span>
                <span>Facebook</span>
                <span>Instagram</span>
            </div>
        </div>
    );
};

export default Footer;
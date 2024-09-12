import { Fragment } from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  let year = new Date();
  year = year.getFullYear();

  return (
    <Fragment>
      <footer className={classes.footer}>
        <p>&copy; {year}. Yang Qiao Yan. All Rights Reserved.</p>
      </footer>
    </Fragment>
  );
};

export default Footer;

import { Fragment } from "react/cjs/react.production.min";
import classes from "./Footer.module.css";

const Footer = (props) => {
  let year = new Date();
  year = year.getFullYear();

  return (
    <Fragment>
      <footer>
        <p>&copy; {year}. Yang Qiao Yan. All Rights Reserved.</p>
      </footer>
    </Fragment>
  );
};

export default Footer;

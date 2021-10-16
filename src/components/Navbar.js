import { Fragment } from "react/cjs/react.production.min";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <Fragment>
      <nav id="navbar" className={classes.nav}>
        <ul className={classes.navList}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;

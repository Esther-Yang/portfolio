import { Fragment } from "react/cjs/react.production.min";
import classes from "./About.module.css";

const About = (props) => {
  return (
    <Fragment>
      <section id="about" className={classes.about}>
        <h1>Yang Qiao Yan</h1>
        <p>A computer science fresh graduate looking for a full-time job.</p>
      </section>
    </Fragment>
  );
};

export default About;

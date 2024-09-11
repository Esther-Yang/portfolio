import { Fragment } from "react/cjs/react.production.min";
import classes from "./About.module.css";

const About = (props) => {
  return (
    <Fragment>
      <section id="about" className={classes.about}>
        <h1>Yang Qiao Yan</h1>
        <p>Detail-oriented <b>Software Engineer</b> specializing in Data Science and software development.</p>
        <p>Experienced in optimizing data transformations and automating processes to enhance efficiency and accuracy. </p>
        <p>Possesses a strong educational background in <b>Data Science</b> and <b>Computer Science</b> and is well-prepared to contribute effectively to a software engineering role.</p>
      </section>
    </Fragment>
  );
};

export default About;

import { Fragment } from "react/cjs/react.production.min";
import classes from "./Education.module.css";

const Education = (props) => {
  return (
    <Fragment>
      <section id="education" className={classes.education}>
        <h2>Education</h2>
        <div>
            <p className={classes.company}>Universiti Sains Malaysia <span className={classes.date}>Mar 2023 – Sep 2024</span></p>
            <p className={classes.role}>Master of Science (Data Science and Analytics) CGPA: 3.85/4.00</p>
            <p>Dean’s List (Semester 1, 2023/2024)</p>
        </div>
        <div>
            <p className={classes.company}>Xiamen University Malaysia <span className={classes.date}>Sep 2017 – Aug 2021</span></p>
            <p className={classes.role}>Bachelor of Engineering in Computer Science and Technology (Honours) CGPA: 3.56/4.00 (Top 20%)</p>
            <p>100% Merit Scholarship Holder for 4 years</p>
        </div>
        <div>
            <p className={classes.company}>Sunway College <span className={classes.date}>Jan 2016 – Jun 2017</span></p>
            <p className={classes.role}>CIE A-Levels (Physics, Chemistry, Biology, Mathematics) 3A*, 1A</p>
            <p>Tan Sri Dato’ Seri Dr. Jeffrey Cheah Entrance Scholarship Holder</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Education;

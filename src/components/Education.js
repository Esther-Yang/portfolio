import { Fragment } from "react";
import classes from "./Education.module.css";

const Education = (props) => {
  return (
    <Fragment>
      <section id="education" className={classes.education}>
        <h2>Education</h2>
        <div className={classes.educationGroup}>
          <div className={classes.institutionWrapper}>
            <p className={classes.institution}>Universiti Sains Malaysia</p>
            <p className={classes.date}>Mar 2023 – Sep 2024</p>
          </div>
          <div className={classes.degreeAndGradeWrapper}>
            <p className={classes.degreeAndGrade}>Master of Science in Data Science and Analytics</p>
            <p className={classes.grade}>CGPA: 3.85/4.00</p>
          </div>
          <ul className={classes.awardsList}>
            <li>Dean’s List (Semester 1, 2023/2024)</li>
          </ul>
        </div>
        <div className={classes.educationGroup}>
          <div className={classes.institutionWrapper}>
            <p className={classes.institution}>Xiamen University Malaysia</p>
            <p className={classes.date}>Sep 2017 – Aug 2021</p>
          </div>
          <div className={classes.degreeAndGradeWrapper}>
            <p className={classes.degreeAndGrade}>Bachelor of Engineering in Computer Science and Technology (Honours)</p>
            <p className={classes.grade}>CGPA: 3.56/4.00 (Top 20%)</p>
          </div>
          <ul className={classes.awardsList}>
            <li>100% Merit Scholarship Holder for 4 years</li>
          </ul>
        </div>
        <div className={classes.educationGroup}>
          <div className={classes.institutionWrapper}>
            <p className={classes.institution}>Sunway College</p>
            <p className={classes.date}>Jan 2016 – Jun 2017</p>
          </div>
          <div className={classes.degreeAndGradeWrapper}>
            <p className={classes.degreeAndGrade}>CIE A-Levels (Physics, Chemistry, Biology, Mathematics)</p>
            <p className={classes.grade}>3A*, 1A</p>
          </div>
          <ul className={classes.awardsList}>
            <li>Tan Sri Dato’ Seri Dr. Jeffrey Cheah Entrance Scholarship Holder</li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Education;

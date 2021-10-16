import { Fragment } from "react/cjs/react.production.min";
import classes from "./Project.module.css";

const Project = (props) => {
  return (
    <Fragment>
      <section id="projects" className={classes.projectsSection}>
        <h2 className={classes.projectsHeading}>Projects</h2>

        <div className={classes.projectGrid}>
          <a
            href="%PUBLIC_URL%/favicon/favicon-32x32.png"
            target="_blank"
            rel="noreferrer"
            className={`${classes.project} ${classes.projectTile}`}
          >
            <img
              className={classes.projectImage}
              src="%PUBLIC_URL%/favicon/favicon-32x32.png"
              alt="project 1"
            />
            <p className={classes.projectTitle}>
              <span className={classes.code}>&lt;</span>
              Project 1 Name
              <span className={classes.code}>&#47;&gt;</span>
            </p>
          </a>
        </div>

        <a
          href="https://github.com/Esther-Yang"
          className={`${classes.btn} ${classes.btnShowAll}`}
          target="_blank"
          rel="noreferrer"
          title="To Yang Qiao Yan's GitHub"
        >
          Show all<i className="fas fa-chevron-right"></i>
        </a>
      </section>
    </Fragment>
  );
};

export default Project;

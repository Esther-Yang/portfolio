import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./Project.module.css";
import {
  faChevronRight,
  faCode,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import projectGreatQuoteImage from "../image/project-great-quotes.jpeg";
import projectExpenseTracker from "../image/project-expense-tracker.jpeg";
import projectToDo from "../image/project-to-do.jpeg";

const Project = (props) => {
  return (
    <Fragment>
      <section id="project" className={classes.projectsSection}>
        <h2 className={classes.projectsHeading}>Projects</h2>
        <p className={classes.projectsHeadingDescription}>
          Under each project title, <br />
          click <FontAwesomeIcon icon={faEye} /> to view the live site <br /> or
          click <FontAwesomeIcon icon={faCode} /> to view the source code.
        </p>

        <div className={classes.projectGrid}>
          <div className={classes.project}>
            <img
              className={classes.projectImage}
              src={projectExpenseTracker}
              alt="Expense Tracker"
            />
            <p className={classes.projectTitle}>Expense Tracker</p>
            <a
              href="https://esther-yang.github.io/expense-tracker-app/"
              target="_blank"
              rel="noreferrer"
              title="To Live Site"
            >
              <FontAwesomeIcon className={classes.icon} icon={faEye} />
            </a>
            <a
              href="https://github.com/Esther-Yang/expense-tracker-app"
              target="_blank"
              rel="noreferrer"
              title="To Code"
            >
              <FontAwesomeIcon className={classes.icon} icon={faCode} />
            </a>
          </div>

          <div className={classes.project}>
            <img
              className={classes.projectImage}
              src={projectGreatQuoteImage}
              alt="Great Quotes"
            />
            <p className={classes.projectTitle}>Great Quotes</p>
            <a
              href="https://yqy-app.firebaseapp.com/quotes"
              target="_blank"
              rel="noreferrer"
              title="To Live Site"
            >
              <FontAwesomeIcon className={classes.icon} icon={faEye} />
            </a>
            <a
              href="https://github.com/Esther-Yang/great-quotes"
              target="_blank"
              rel="noreferrer"
              title="To Code"
            >
              <FontAwesomeIcon className={classes.icon} icon={faCode} />
            </a>
          </div>

          <div className={classes.project}>
            <img
              className={classes.projectImage}
              src={projectToDo}
              alt="To-do App"
            />
            <p className={classes.projectTitle}>To-do App</p>
            <a
              href="https://esther-yang.github.io/to-do-app/"
              target="_blank"
              rel="noreferrer"
              title="To Live Site"
            >
              <FontAwesomeIcon className={classes.icon} icon={faEye} />
            </a>
            <a
              href="https://github.com/Esther-Yang/to-do-app"
              target="_blank"
              rel="noreferrer"
              title="To Code"
            >
              <FontAwesomeIcon className={classes.icon} icon={faCode} />
            </a>
          </div>
        </div>

        <a
          href="https://github.com/Esther-Yang"
          className={`${classes.btn} ${classes.btnShowAll}`}
          target="_blank"
          rel="noreferrer"
          title="To Yang Qiao Yan's GitHub"
        >
          Show all&nbsp;
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </section>
    </Fragment>
  );
};

export default Project;

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./Contact.module.css";

const Contact = (props) => {
  return (
    <Fragment>
      <section id="contact" className={classes.contactSection}>
        <div className={classes.contactSectionHeader}>
          <h2>Get in touch with me</h2>
          <p>You can find me via these channels.</p>
        </div>
        <div className={classes.contactLinks}>
          <a
            href="https://github.com/Esther-Yang"
            target="_blank"
            rel="noreferrer"
            className={`${classes.btn} ${classes.contactDetails}`}
          >
            <FontAwesomeIcon icon={faGithub} />
            &nbsp;GitHub&nbsp;
          </a>

          <a
            href="https://www.linkedin.com/in/qiao-yan-yang/"
            target="_blank"
            rel="noreferrer"
            className={`${classes.btn} ${classes.contactDetails}`}
          >
            <FontAwesomeIcon icon={faLinkedin} />
            &nbsp;LinkedIn&nbsp;
          </a>

          <a
            href="mailto:qiaoyanandyang@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={`${classes.btn} ${classes.contactDetails}`}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;Email&nbsp;
          </a>
        </div>
      </section>
      ;
    </Fragment>
  );
};

export default Contact;

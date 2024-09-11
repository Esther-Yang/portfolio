import { Fragment } from "react/cjs/react.production.min";
import classes from "./Experiences.module.css";

const Experiences = (props) => {
  return (
    <Fragment>
      <section id="experiences" className={classes.experiences}>
        <h1>Experiences</h1>
        <div>
            <p className={classes.company}>Intel Corporation</p>
            <p className={classes.role}>EDA (Electronic Design Automation) Tools Software Engineer <span className={classes.date}>Aug 2022 – Present</span></p>
            <p className={classes.role}>Technical Graduate Trainee <span className={classes.date}>Apr 2022 – Aug 2022</span></p>
            <ul>
                <li><b>Developed</b> advanced data visualizations using <b>Power BI</b> and optimized data transformation with <b>SQL Server Analysis Services (SSAS)</b>, streamlining scan indicator analysis for over <b>10 die-level projects</b>, resulting in <b>faster reporting</b> for both executives and engineering teams.</li>
                <li><b>Provided</b> comprehensive <b>technical support</b> to the scan engineering team, guiding the enablement of scan indicators and <b>collaborating</b> with cross-functional teams, including the Product Development Analytics team, to troubleshoot and resolve complex issues.</li>
                <li><b>Automated</b> data validation processes by developing <b>Python</b> scripts executed via cron jobs, integrating <b>email alert</b> systems that reduced error detection time, improving data accuracy and team response times.</li>
                <li><b>Created</b> detailed <b>documentation</b> and developed training materials to <b>standardize processes</b>, facilitating knowledge sharing and onboarding across teams, which led to improved operational efficiency.</li>
            </ul>
        </div>

        <div>
            <p className={classes.company}>Public Bank Berhad</p>
            <p className={classes.role}>Intern in Information Technology Division <span className={classes.date}>Sep 2020 – Jan 2021</span></p>
            <ul>
                <li><b>Collaborated</b> with front-end developers to <b>develop</b> a .NET Framework MVC application in <b>C#</b>, automating the formatting of HTML code and optimizing their workflow.</li>
                <li><b>Conducted research</b> on web development trends and emerging mobile development technologies, reporting on the insights and findings.</li>
            </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Experiences;

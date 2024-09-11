import { Fragment, useEffect } from "react";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const navLink = document.querySelector(`nav ul li a[href="#${id}"]`);
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove(classes.active));
            navLink.classList.add(classes.active);
          }
        });
      },
      {
        rootMargin: "-80px 0px 0px 0px", // Adjust rootMargin to fine-tune when highlighting triggers
        threshold: 0.2, // Adjust threshold if necessary
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Fragment>
      <nav id="navbar" className={classes.nav}>
        <ul className={classes.navList}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experiences">Experiences</a>
          </li>
          <li>
            <a href="#education">Education</a>
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

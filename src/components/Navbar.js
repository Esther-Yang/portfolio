import { Fragment, useEffect, useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const handleLinkClick = (sectionId) => {
    closeMenu(); // Close the menu when a link is clicked
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set the active section on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <nav id="navbar" className={`${classes.nav} ${isOpen ? classes.open : ''}`}>
        <div className={classes.hamburger} onClick={toggleMenu}>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </div>
        <ul className={`${classes.navList} ${isOpen ? classes.show : ''}`}>
          <li className={activeSection === "about" ? classes.active : ""} onClick={() => handleLinkClick("about")}>
            <a href="#about">About</a>
          </li>
          <li className={activeSection === "experiences" ? classes.active : ""} onClick={() => handleLinkClick("experiences")}>
            <a href="#experiences">Experiences</a>
          </li>
          <li className={activeSection === "education" ? classes.active : ""} onClick={() => handleLinkClick("education")}>
            <a href="#education">Education</a>
          </li>
          <li className={activeSection === "project" ? classes.active : ""} onClick={() => handleLinkClick("project")}>
            <a href="#project">Project</a>
          </li>
          <li className={activeSection === "contact" ? classes.active : ""} onClick={() => handleLinkClick("contact")}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;

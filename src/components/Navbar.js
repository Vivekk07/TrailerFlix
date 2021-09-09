import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const logoApi = "210908/15ea161d7ff5ab24aecfb640e75e6a98.png";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`${styles.nav} ${show && styles.nav__black}`}>
      <img
        className={styles.nav__logo}
        src={`https://fontmeme.com/permalink/${logoApi}`}
        alt="netflix-font"
        border="0"
      />
      <img
        className={styles.nav__avatar}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix-font"
        border="0"
      />
    </div>
  );
};

export default Navbar;

import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.square}>
          <div className={styles["square--inner"]}></div>
        </div>

        <h3>JOSEPHNYAABAPHOTOGRAPHY</h3>
      </div>
      <nav className={styles.nav}>
        <Link className={styles["nav-link"]} to={"#home"}>
          Home
        </Link>
        <Link className={styles["nav-link"]} to={"#about"}>
          About
        </Link>
        <Link className={styles["nav-link"]} to={"#gallery"}>
          Gallery
        </Link>
        <Link className={styles["nav-link"]} to={"#contact"}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;

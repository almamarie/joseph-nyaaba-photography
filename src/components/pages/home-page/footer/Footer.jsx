import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.contacts}>
          <div className={styles.logo}>
            <div className={styles.square}>
              <div className={styles["square--inner"]}></div>
            </div>

            <h3>JOSEPHNYAABAPHOTOGRAPHY</h3>
          </div>

          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type a
          </p>
          <ul className={styles.address}>
            <li className={styles.email}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={styles.icon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </div>
              josephnyaaba758.jn@gmail.com
            </li>

            <li className={styles.loc}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={styles.icon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              Near the Assemblies of God, on the Bolga-Navrongo Road
            </li>

            <li className={styles.phone}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={styles.icon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              233 24-000-0000,
            </li>
          </ul>
        </div>
        <nav className={styles.nav}>
          <h4>QUICK LINKS</h4>
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
        <nav className={styles.nav}>
          <h4>QUICK LINKS</h4>
          <Link className={styles["nav-link"]} to={"#home"}>
            Raising awareness
          </Link>
          <Link className={styles["nav-link"]} to={"#about"}>
            Sparking change
          </Link>
          <Link className={styles["nav-link"]} to={"#gallery"}>
            History
          </Link>
          <Link className={styles["nav-link"]} to={"#contact"}>
            Culture
          </Link>
        </nav>
        <p className={styles.text}>
          <span>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer.
          </span>
          <span>Lorem Ipsum has been the industry's standard dummy</span>
        </p>
      </div>

      <div className={styles.copyright}>
        Copyright{" "}
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["icon-copyright"]}
        >
          <path
            d="M20 32H28C28.5667 32 29.042 31.808 29.426 31.424C29.81 31.04 30.0013 30.5653 30 30V26H26V28H22V20H26V22H30V18C30 17.4333 29.808 16.9587 29.424 16.576C29.04 16.1933 28.5653 16.0013 28 16H20C19.4333 16 18.9587 16.192 18.576 16.576C18.1933 16.96 18.0013 17.4347 18 18V30C18 30.5667 18.192 31.042 18.576 31.426C18.96 31.81 19.4347 32.0013 20 32ZM24 44C21.2333 44 18.6333 43.4747 16.2 42.424C13.7667 41.3733 11.65 39.9487 9.85 38.15C8.05 36.35 6.62533 34.2333 5.576 31.8C4.52667 29.3667 4.00133 26.7667 4 24C4 21.2333 4.52533 18.6333 5.576 16.2C6.62667 13.7667 8.05133 11.65 9.85 9.85C11.65 8.05 13.7667 6.62533 16.2 5.576C18.6333 4.52667 21.2333 4.00133 24 4C26.7667 4 29.3667 4.52533 31.8 5.576C34.2333 6.62667 36.35 8.05133 38.15 9.85C39.95 11.65 41.3753 13.7667 42.426 16.2C43.4767 18.6333 44.0013 21.2333 44 24C44 26.7667 43.4747 29.3667 42.424 31.8C41.3733 34.2333 39.9487 36.35 38.15 38.15C36.35 39.95 34.2333 41.3753 31.8 42.426C29.3667 43.4767 26.7667 44.0013 24 44Z"
            fill="white"
          />
        </svg>
        2024 - Developed by
        <Link
          to="https://marieloumar-website.vercel.app/"
          target="_blanc"
          className={styles["developer-website-link"]}
        >
          Louis Marie Atoluko Ayariga
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

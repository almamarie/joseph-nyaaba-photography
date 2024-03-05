import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h2 className={styles.greeting}>Hi Everyone!</h2>
        <h1 className={styles.name}>
          I&apos;m <span>JOSEPH NYAABA</span>
        </h1>

        <h3 className={styles.profession}>PHOTOGRAPHER | VIDEOGRAPHER</h3>

        <p className={styles.description}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>

        <button className={styles.button}>HIRE ME</button>
      </div>
    </section>
  );
};

export default Hero;

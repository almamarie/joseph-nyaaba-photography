import React from "react";
import styles from "./Gallery.module.css";
import ImageScrollable from "./ImageScrollable";
import Categories from "./Categories";

const Gallery = () => {
  return (
    <section id="gallery" className={styles.wrapper}>
      <div className={styles["recent-work"]}>
        <div className={styles.dash}></div>
        <div className={styles.text}>
          <h2>RECENT WORK</h2>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <ImageScrollable />
      <Categories />
    </section>
  );
};

export default Gallery;

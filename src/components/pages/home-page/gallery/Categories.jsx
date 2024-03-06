import React from "react";
import styles from "./Categories.module.css";
import themedImages from "../../../../resources/images/medium-shot-beautiful-women-posing-with-flowers.jpg";
import allImages from "../../../../resources/images/psychedelic-portrait-collage.jpg";
import natureImages from "../../../../resources/images/beautiful-shot-tree-savanna-plains-with-blue-sky.jpg";
import traditionalImages from "../../../../resources/images/medium-shot-women-with-fur.jpg";

import ImageCard from "./ImageCard";
const Categories = () => {
  return (
    <div className={styles.wrapper}>
      <ImageCard
        className={styles.left}
        image={themedImages}
        borderRadius="left"
      />
      <div className={styles["top-down-images"]}>
        <ImageCard
          className={styles.top}
          image={allImages}
          borderRadius="top"
        />

        <ImageCard
          className={styles.bottom}
          image={natureImages}
          borderRadius="bottom"
        />
      </div>
      <div>
        <div className={styles["recent-work"]}>
          <div className={styles.text}>
            <h2>RECENT WORK</h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <ImageCard
          className={styles.right}
          image={traditionalImages}
          borderRadius="right"
        />
      </div>
      <div className={styles.dash}></div>
    </div>
  );
};

export default Categories;

import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = (props) => {
  const image = props.image;
  const borderRadius = props.borderRadius;

  console.log(`${styles.wrapper} ${styles[`${borderRadius}-border`]}`);
  return (
    <div
      className={`${styles.wrapper} ${styles[`${borderRadius}-border`]} ${
        props.className
      }`}
    >
      <img className={styles.image} src={image} alt="portrait" />
    </div>
  );
};

export default ImageCard;

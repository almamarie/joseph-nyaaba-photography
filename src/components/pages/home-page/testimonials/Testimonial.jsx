import React from "react";
import styles from "./Testimonial.module.css";

export const Testimonial = (props) => {
  const { data } = props;
  return (
    <div className={`${styles.wrapper} ${props.className}`}>
      <p>{data.comment}</p>

      <img src={data.image} alt="client of Nyaaba Joseph" />
    </div>
  );
};

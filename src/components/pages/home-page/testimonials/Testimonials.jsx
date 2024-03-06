import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import { Testimonial } from "./Testimonial";

import image1 from "../../../../resources/images/home/gallery/ato-aikins-0QHzfONrLcc-unsplash.jpg";
import image2 from "../../../../resources/images/home/gallery/ato-aikins-70OAYm5k8hs-unsplash.jpg";
import image4 from "../../../../resources/images/home/gallery/handsome-man-using-modern-smartphone-outdoors.jpg";
import image5 from "../../../../resources/images/home/gallery/khalid-boutchich-MYmWkQsup-I-unsplash.jpg";
import image6 from "../../../../resources/images/home/gallery/maatla-seetelo-ficbKAZdxv8-unsplash.jpg";

const testimonials_list = [
  {
    image: image1,
    comment:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },

  {
    image: image2,
    comment:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    image: image4,
    comment:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    image: image5,
    comment:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    image: image6,
    comment:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];
const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState(3);

  const leftReview =
    currentReview - 1 < 0 ? testimonials_list.length - 1 : currentReview - 1;

  const rightReview =
    currentReview + 1 >= testimonials_list.length ? 0 : currentReview + 1;

  const updateCurrentReview = (value) => {
    let newLoc = currentReview + value;

    if (newLoc > testimonials_list.length - 1) newLoc = 0;
    if (newLoc < 0) newLoc = testimonials_list.length - 1;
    setCurrentReview(newLoc);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles["control--right"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => updateCurrentReview(1)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>
      </div>
      <div className={styles["control--left"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => updateCurrentReview(-1)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>
      </div>
      <Testimonial
        className={styles.left}
        data={testimonials_list[leftReview]}
      />
      <Testimonial
        className={styles.current}
        data={testimonials_list[currentReview]}
      />
      <Testimonial
        className={styles.right}
        data={testimonials_list[rightReview]}
      />
    </div>
  );
};

export default Testimonials;

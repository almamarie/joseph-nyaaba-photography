import React from "react";
import styles from "./MailingList.module.css";

const MailingList = () => {
  return (
    <section className={styles.wrapper}>
      <h2>JOIN THE MAILING LIST</h2>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type a
      </p>
      <div className={styles["input-wrapper"]}>
        <input type="text" placeholder="Enter Your Email Address" />
        <button type="text">SUBSCRIBE</button>
      </div>
    </section>
  );
};

export default MailingList;

import React from "react";
import styles from "./ImageScrollable.module.css"; // Import your CSS file containing styles

import image1 from "../../../../resources/images/home/gallery/ato-aikins-0QHzfONrLcc-unsplash.jpg";
import image2 from "../../../../resources/images/home/gallery/ato-aikins-70OAYm5k8hs-unsplash.jpg";
import image4 from "../../../../resources/images/home/gallery/handsome-man-using-modern-smartphone-outdoors.jpg";
import image5 from "../../../../resources/images/home/gallery/khalid-boutchich-MYmWkQsup-I-unsplash.jpg";
import image6 from "../../../../resources/images/home/gallery/maatla-seetelo-ficbKAZdxv8-unsplash.jpg";
import image7 from "../../../../resources/images/home/gallery/oluwaferanmi-caleb-Q1QRTSeZIxI-unsplash.jpg";
import image8 from "../../../../resources/images/home/gallery/portrait-volunteer-who-organized-donations-charity.jpg";

function ImageScrollable() {
  //   const containerRef = useRef(null);

  //   useEffect(() => {
  //     const scrollContainer = containerRef.current;

  //     // Function to handle scrolling animation
  //     const startScroll = () => {
  //       const scrollWrapper = scrollContainer.getElementById("scroll-wrapper");
  //       const wrapperWidth = scrollWrapper.offsetWidth;
  //       const containerWidth = scrollContainer.offsetWidth;

  //       // Calculate animation duration based on container and content widths
  //       const duration = (wrapperWidth / containerWidth) * 10; // Adjust scroll speed as needed

  //       scrollWrapper.style.animation = `scroll ${duration}s linear infinite`;
  //     };

  //     // Start scrolling animation when component mounts
  //     startScroll();

  //     // Cleanup function to clear animation when component unmounts
  //     return () => {
  //       const scrollWrapper = scrollContainer.querySelector(".scroll-wrapper");
  //       scrollWrapper.style.animation = "";
  //     };
  //   }, []);

  const files = [image1, image2, image4, image5, image6, image7, image8];

  return (
    <div className={styles["scroll-container"]}>
      <div id="scroll-wrapper" className={styles["scroll-wrapper"]}>
        {files.map((fil, index) => {
          return <img key={index} src={fil} alt="traction of Joseph Nyaaba" />;
        })}
      </div>
    </div>
  );
}

export default ImageScrollable;

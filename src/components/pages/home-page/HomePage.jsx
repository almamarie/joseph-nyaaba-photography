import React from "react";
import Hero from "./hero/Hero";
import Gallery from "./gallery/Gallery";
import Testimonials from "./testimonials/Testimonials";
import MailingList from "./mailing-list/MailingList";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <Testimonials />
      <MailingList />
    </>
  );
};

export default HomePage;

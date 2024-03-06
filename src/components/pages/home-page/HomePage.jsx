import React from "react";
import Hero from "./hero/Hero";
import Gallery from "./gallery/Gallery";
import Testimonials from "./testimonials/Testimonials";
import MailingList from "./mailing-list/MailingList";
import Footer from "./footer/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <Testimonials />
      <MailingList />
      <Footer />
    </>
  );
};

export default HomePage;

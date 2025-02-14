import React from "react";
import Hero from "C:/Users/visin/OneDrive/Desktop/ecommerce-app/frontend/src/components/Hero.jsx";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import Policy from "../components/Policy";
import NewsletterBox from "../components/NewsletterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Policy />
      <NewsletterBox />
    </div>
  );
};

export default Home;

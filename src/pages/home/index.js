import React from "react";
import HeroSection from "./../../components/HeroSection";
import ClientsSection from "./../../components/ClientsSection";
import FeaturesSection from "./../../components/FeaturesSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="dark"
        size="medium"
        title="A cleverbot that learns from you"
        subtitle="Polly uses machine learning techniques to mimic your server's unique vocabulary. Install it on your server today - all it takes is one click!"
        buttonText="Alright, I'm in!"
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
      <ClientsSection color="light" size="normal" title="" subtitle="" />
      <FeaturesSection
        color="white"
        size="medium"
        title="Commands"
        subtitle=""
      />
      <CtaSection
        color="dark"
        size="medium"
        title="Ready to get started?"
        buttonText="Add Polly to your server!"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default HomePage;

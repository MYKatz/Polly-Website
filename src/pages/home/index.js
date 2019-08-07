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
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Get Started"
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
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
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

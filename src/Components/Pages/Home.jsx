import React from "react";
import DestinationHome from "../HomeSection/DestinationHome/DestinationHome";
import DDownload from "../HomeSection/Download/DDownload";
import Hero from "../HomeSection/Hero/Hero";
import HomeAbout from "../HomeSection/HomeAbout/HomeAbout";
import Work from "../HomeSection/Work/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <DestinationHome />
      <DDownload />
      <Work />
    </>
  );
}

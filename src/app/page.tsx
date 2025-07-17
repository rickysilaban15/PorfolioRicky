"use client";

import Navigation from "../components/sections/Navigation";
import HeroSection from "../components/sections/HeroSection";
import PortfolioAbout from "../components/sections/PortfolioAbout";
import PortfolioProjects from "../components/sections/PortfolioProjects";
import PortfolioSkills from "../components/sections/PortfolioSkills";
import PortfolioExperience from "../components/sections/PortfolioExperience";
import PortfolioContact from "../components/sections/PortfolioContact";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <PortfolioAbout />
      <PortfolioProjects />
      <PortfolioSkills />
      <PortfolioExperience />
      <PortfolioContact />
      <Footer />
    </main>
  );
}
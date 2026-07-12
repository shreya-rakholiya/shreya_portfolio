import React from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";
import { Experience } from "../components/sections/Experience";
import { Services } from "../components/sections/Services";
import { Stack } from "../components/sections/Stack";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-grid-pattern relative">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Services />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

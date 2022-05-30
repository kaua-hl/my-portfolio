import React from "react";
import About from "../../components/Home/About/About";
import Hero from "../../components/Home/Hero/Hero";
import Projects from "../../components/Home/Projects/Projects";
import Skills from "../../components/Home/Skills/Skills";
import Contact from "../../components/Home/Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;

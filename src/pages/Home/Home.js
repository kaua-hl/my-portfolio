import React, { useEffect, useRef } from "react";
import About from "../../components/Home/About/About";
import Hero from "../../components/Home/Hero/Hero";
import LocomotiveScroll from "locomotive-scroll";
import Projects from "../../components/Home/Projects/Projects";
import Skills from "../../components/Home/Skills/Skills";
import Contact from "../../components/Home/Contact/Contact";

const Home = () => {
  let container = useRef(null);

  useEffect(() => {
    new LocomotiveScroll({
      el: container,
      smooth: true,
      lerp: 0.06,
      multiplier: 0.5,
    });
  }, []);

  return (
    <div
      ref={(el) => (container = el)}
      className="container"
      data-scroll-container
    >
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;

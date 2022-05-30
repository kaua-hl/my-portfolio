import React, { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";

const useLocomotive = () => {
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: document.querySelector(".App"),
      smooth: true,
    });

    setTimeout(() => {
      scroll.update();
    }, 100);
  }, []);
};

export default useLocomotive;

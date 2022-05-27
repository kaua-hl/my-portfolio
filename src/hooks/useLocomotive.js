import LocomotiveScroll from "locomotive-scroll";
import "../assets/css/vendors/locomotive-scroll.css";
import { useEffect } from "react";

export default function useLocomotive(start) {
  useEffect(() => {
    const scrollEl = document.querySelector("#main-container");

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
  }, [start]);
}

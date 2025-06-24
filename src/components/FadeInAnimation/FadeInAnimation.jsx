import React from "react";
import { useInView } from "react-intersection-observer";
import "./fadeInAnimation.css";

const FadeInAnimation = ({ children, direction }) => {
  direction = direction || "left";
  console.log("FadeInAnimation direction:", direction);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-animation ${inView ? "is-visible"  : ""} ${direction}`}
    >
      {children}
      {console.log("FadeInAnimation inView:", inView)}
    </div>
  );
};

export default FadeInAnimation;

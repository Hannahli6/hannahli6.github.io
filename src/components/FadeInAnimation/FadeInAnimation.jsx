import React from "react";
import { useInView } from "react-intersection-observer";
import "./fadeInAnimation.css";

const FadeInAnimation = ({ children, direction }) => {
  direction = direction || "left";
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div className="fade-in-wrapper">
      <div
        ref={ref}
        className={`fade-in-animation ${inView ? "is-visible"  : ""} ${direction}`}
      >
        {children}
      </div>
    </div>
    
  );
};

export default FadeInAnimation;

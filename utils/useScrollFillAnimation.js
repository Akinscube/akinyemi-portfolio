import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

const useScrollAnimation = () => {
  const [bgValue, setBgValue] = useState("100%");
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 30%"],
  });

  const xTransform = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"]);
  const springXTransform = useSpring(xTransform, {
    damping: 10,
    stiffness: 10,
    mass: 1,
  });

  useEffect(() => {
    return springXTransform.onChange((latest) => {
      setBgValue(latest + "%");
    });
  }, [springXTransform]);

  return { containerRef, bgValue };
};

export default useScrollAnimation;

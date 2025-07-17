"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  distance?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  className = "",
  direction = "up",
  duration = 0.6,
  delay = 0,
  distance = 20,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    threshold,
    triggerOnce,
    margin: "0px 0px -100px 0px"
  });

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: distance };
    }
  };

  const directionOffset = getDirectionOffset();

  const variants = {
    hidden: {
      opacity: 0,
      x: directionOffset.x,
      y: directionOffset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};
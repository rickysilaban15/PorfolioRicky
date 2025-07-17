"use client";

import { motion, MotionProps } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useState, useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface TiltImageProps extends Omit<ImageProps, "className"> {
  tiltIntensity?: number;
  className?: string;
  containerClassName?: string;
  enableGlow?: boolean;
  enableShadow?: boolean;
  perspective?: number;
}

export const TiltImage = ({
  tiltIntensity = 10,
  className,
  containerClassName,
  enableGlow = true,
  enableShadow = true,
  perspective = 1000,
  ...imageProps
}: TiltImageProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -tiltIntensity;
    const rotateYValue = (mouseX / (rect.width / 2)) * tiltIntensity;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const motionProps: MotionProps = {
    style: {
      transformStyle: "preserve-3d",
      perspective: perspective,
    },
    animate: {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: isHovered ? 1.05 : 1,
    },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
      mass: 1,
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "relative cursor-pointer select-none will-change-transform",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...motionProps}
    >
      <motion.div
        className="relative overflow-hidden"
        animate={{
          boxShadow: isHovered && enableShadow
            ? `0 25px 50px -12px rgba(0, 82, 136, 0.25), 0 0 40px -12px rgba(0, 82, 136, 0.15)`
            : "0 0 0 0px rgba(0, 0, 0, 0)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        <Image
          {...imageProps}
          className={cn(
            "w-full h-full object-cover transition-all duration-300 will-change-transform",
            className
          )}
        />
        
        {/* Glow Overlay */}
        {enableGlow && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-blue/10 opacity-0 pointer-events-none"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          />
        )}
        
        {/* Subtle highlight on tilt */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0,
            background: `linear-gradient(${45 + rotateY * 2}deg, rgba(255,255,255,0.1) 0%, transparent 30%, transparent 70%, rgba(0,82,136,0.05) 100%)`,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        />
      </motion.div>
      
      {/* Reflection effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};
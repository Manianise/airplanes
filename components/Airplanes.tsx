'use client'
import Airplane from "../lib/airplane";
import { useEffect, useRef } from "react";

export default function Airplanes() {
  const svg = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svg.current) return;

    const airplane = new Airplane(svg.current);

    // Staggered start
    for (let i = 0; i < airplane.defaultAirPlaneProps.maxPoints; i++) {
      setTimeout(() => airplane.createPlaneWithDelay(), i * 500);
    }

    const checkInterval = setInterval(() => {
      if (airplane.activePlanes.length < airplane.defaultAirPlaneProps.maxPoints) {
        airplane.createPlaneWithDelay();
      }
    }, 2000);

    const handleVisibility = () => {
      if (document.hidden) {
        if (airplane.animationId) cancelAnimationFrame(airplane.animationId);
        airplane.animationId = null;
      } else {
        airplane.startAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    // CLEANUP is essential in React
    return () => {
      clearInterval(checkInterval);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (airplane.animationId) cancelAnimationFrame(airplane.animationId);
    };
  }, []);

  return (
    <svg 
      ref={svg} 
      id="canvas" 
    />
  );
}
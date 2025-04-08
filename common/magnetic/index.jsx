import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const MagneticEffect = ({ children }) => {
  const magnetic = useRef(null);

  useEffect(() => {
    if (!magnetic.current) return;

    console.log(children);

    const xto = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yto = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, top, left } = magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xto(x * 0.35);
      yto(y * 0.35);
    };

    const handleMouseLeave = () => {
      xto(0);
      yto(0);
    };

    magnetic.current.addEventListener("mousemove", handleMouseMove);
    magnetic.current.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function
    return () => {
      if (magnetic.current) {
        magnetic.current.removeEventListener("mousemove", handleMouseMove);
        magnetic.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
};

export default MagneticEffect;

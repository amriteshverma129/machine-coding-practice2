import { useState, useEffect } from "react";

export const Animation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / maxScroll) * 360; // Convert scroll into degrees
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        height: "1000vh",
      }}
    >
      <div
        style={{
          height: "300px",
          width: "300px",
          background: "lightgray",
          borderRadius: "50%",
          position: "sticky",
          top: 0,
          bottom: 0,
        }}
      >
        {/* Rotating Wrapper Controlled by Scroll */}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transform: `rotate(${scrollProgress}deg)`, // Rotation based on scroll
          }}
        >
          <div
            style={{
              height: "20px",
              width: "20px",
              background: "red",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

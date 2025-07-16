import React, { useState, useEffect } from "react";

const MobileLayout = ({ children }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function handleResize() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const scaleW = vw / 1080;
      const scaleH = vh / 1920;
      const scale = Math.min(scaleW, scaleH, 1);
      setScale(scale);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="aspect-outer">
      <div className="aspect-inner">
        <div
          className="inner-content"
          style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
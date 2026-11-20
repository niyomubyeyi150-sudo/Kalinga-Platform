import { useEffect, useState } from "react";
import logo from "../assets/kalinga-logo.jpg";

function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLeaving(true), 600);
          setTimeout(() => onFinish(), 1500);
          return 100;
        }
        return prev + 1;
      });
    }, 55);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`intro-screen ${isLeaving ? "intro-screen-leaving" : ""}`}>
      <div className="intro-content">
        <img src={logo} alt="Kalinga Dynamics Ltd" className="intro-logo" />

        <h1 className="intro-title">
          <span className="intro-title-base">KALINGA DYNAMICS</span>
          <span className="intro-title-fill" style={{ width: `${progress}%` }}>
            KALINGA DYNAMICS
          </span>
        </h1>

        <p className="intro-subtitle">PRECISION FROM ABOVE</p>
      </div>

      <div className="intro-counter">{progress}%</div>
    </div>
  );
}

export default Preloader;

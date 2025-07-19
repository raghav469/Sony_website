import { useEffect } from "react";
import AppBar from "./components/AppBar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
 
import "./App.css";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      },
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      {/* Glowing Circles */}
      <div className="glow-circle top-left" />
      <div className="glow-circle bottom-right" />

      {/* Content */}
      <AppBar />
      <div className="main-content">
        <LandingPage />
      </div>
      <Footer />
    </div>
  );
};

export default App;

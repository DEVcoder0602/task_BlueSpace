import "./App.css";
import HomeContent from "./components/content/HomeContent";
import TopBar from "./components/navbar/TopBar";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function App() {
  // const [scrollPercentage, setScrollPercentage] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.documentElement.scrollHeight;

  //     const percentage = (scrollTop / (documentHeight - windowHeight)) * 100;
  //     setScrollPercentage(percentage);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const rotateAngle = scrollY * 0.5 + 270;
  // const scaleFactor = 1 - scrollY * 0.002;

  const cloudControls = useAnimation();

  useEffect(() => {
    // Calculate the opacity based on scroll position
    const opacity = 1 - scrollY * 0.05;
    // Animate the cloud opacity
    cloudControls.start({ opacity });
  }, [cloudControls]);

  const squareControls = useAnimation();

  useEffect(() => {
    // Calculate the position based on scroll position
    const translateY = scrollY;
    // Animate the square position
    squareControls.start({
      y: -translateY,
      x: -translateY * 0.5,
      scale: 1 - scrollY * 0.001,
      rotate: 270 - scrollY * 0.5,
    });
  }, [scrollY, squareControls]);

  return (
    <>
      <div className="app">
        <TopBar />
        {/* <HomeContent /> */}
        <div className="image-overlay">
          <motion.div
            className="square-overlay"
            animate={squareControls}
            // style={{
            //   transform: `rotate(90deg) translateX(${
            //     scrollPercentage >= 100 ? "-50vw" : "0"
            //   }) translateY(${scrollPercentage >= 100 ? "-50vh" : "0"})`,
            //   transition: "transform 0.5s ease",
            // }}
            // style={{
            //   transform: `rotate(-${rotateAngle}deg) scale(${scaleFactor})`,
            //   transition: "transform 0.3s ease",
            //   top: `-${scrollY * 2}px`,
            //   left: `-${scrollY}px`,
            // }}
          >
            <motion.div
              className="cloud-overlay"
              initial={{ opacity: 1 }}
              // animate={cloudControls}
              style={{ opacity: `${scrollY * 0.1}` }}
            ></motion.div>
          </motion.div>
          <div className="text-overlay" style={{ top: "20%", width: "36%" }}>
            <span style={{ color: "white", fontWeight: 200 }}>
              Connecting your{" "}
            </span>
            <span style={{ color: "#0052CC" }}>brand overseas</span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "100vh",
            width: "100%",
            height: "100%",
            // background: "red",
          }}
        >
          <div className="image-overlay">
            <div className="text-overlay">
              <span style={{ color: "white", fontWeight: 200 }}>
                Key to your{" "}
              </span>
              <span style={{ color: "#0052CC" }}>Digital Empire</span>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "200vh",
            width: "100%",
            height: "100%",
            // background: "red",
          }}
        >
          <div className="image-overlay" style={{ height: "100%" }}>
            <div className="text-overlay" style={{ top: "44%" }}>
              <span style={{ color: "#0052CC" }}>Brand Identity </span>
              <span style={{ color: "white", fontWeight: 200 }}>made easy</span>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "300vh",
            width: "100%",
            height: "100%",
            // background: "red",
          }}
        >
          <div className="image-overlay" style={{ height: "100%" }}>
            <div
              className="text-overlay"
              style={{ top: "44%", left: "4%", textAlign: "start" }}
            >
              <span style={{ color: "#0052CC" }}>Brand Identity </span>
              <span style={{ color: "white", fontWeight: 200 }}>made easy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

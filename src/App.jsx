import "./App.css";
import HomeContent from "./components/content/HomeContent";
import TopBar from "./components/navbar/TopBar";
import { useState, useEffect } from "react";

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

  const rotateAngle = scrollY * 0.5 + 270;
  const scaleFactor = 1 - scrollY * 0.002;

  return (
    <>
      <div className="app">
        <TopBar />
        {/* <HomeContent /> */}
        <div className="image-overlay">
          <div
            className="square-overlay"
            // style={{
            //   transform: `rotate(90deg) translateX(${
            //     scrollPercentage >= 100 ? "-50vw" : "0"
            //   }) translateY(${scrollPercentage >= 100 ? "-50vh" : "0"})`,
            //   transition: "transform 0.5s ease",
            // }}
            style={{
              transform: `rotate(-${rotateAngle}deg) scale(${scaleFactor})`,
              transition: "transform 0.3s ease",
              top: `-${scrollY * 2}px`,
              left: `-${scrollY}px`,
            }}
          >
            <div
              className="cloud-overlay"
              // style={{ opacity: `${scrollY * 0.001}` }}
            ></div>
          </div>
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
            <div className="square-overlay square-overlay2"></div>
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
            <div className="square-overlay square-overlay3"></div>
            <div className="text-overlay" style={{ top: "44%" }}>
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

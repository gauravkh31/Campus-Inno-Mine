import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [minHeight, setMinHeight] = useState("100vh");

  useEffect(() => {
    const updateMinHeight = () => {
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      if (windowHeight > bodyHeight) {
        setMinHeight(windowHeight + "px");
      }
    };
    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);
    return () => {
      window.removeEventListener("resize", updateMinHeight);
    };
  }, []);

  return (
    <div className="flex flex-col" style={{ minHeight: minHeight }}>
      <Navbar />
      <div className="main-content flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}

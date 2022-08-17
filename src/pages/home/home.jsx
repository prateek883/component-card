import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import MetaContent from "../../components/MetaContent/MetaContent";
import AboutSection from "../../components/About/About";
import Featured from "../../components/Featuredvideos/Featuredvideos";
import Footer from "../../components/Footer/Footer";

function home() {
  return (
    <div>
      <div style={{ maxWidth: "100%" }}>
        <Navbar />
      </div>
      <div style={{ maxWidth: "100%" }}>
        <Header />
      </div>
      <div
        style={{
          maxWidth: "100%",
          background:
            "linear-gradient(0.51deg, #fcb900 -32.95%, #fcb900 135.45%)",
        }}
      >
        <MetaContent />
      </div>
      <div style={{ maxWidth: "100%" }}>
        <AboutSection />
      </div>
      <div style={{ maxWidth: "100%" }}>
        <Featured />
      </div>
      <div
        style={{
          maxWidth: "100%",
          backgroundImage:"linear-gradient(0.51deg, #fcb900 -32.95%, #fcb900 135.45%)",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default home;

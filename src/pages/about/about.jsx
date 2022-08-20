import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Aboutus from "../../components/Aboutus/Aboutus";
import Footer from "../../components/Footer/Footer";

function about() {
  return (
    <div>
      <div style={{ maxWidth: "100%" }}>
        <Navbar />
      </div>
      <div
        style={{
          maxWidth: "100%",
          background:
            "linear-gradient(0.51deg, #fcb900 -32.95%, #fcb900 135.45%)",
        }}
      >
        <Aboutus />
      </div>
      <div style={{ maxWidth: "100%"}}>
        <Footer />
      </div>
    </div>
  );
}

export default about;

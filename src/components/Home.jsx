import React, { useEffect, useRef } from "react";

import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome! ",
        "My Name is Khushee Kumari...",
        "I'm full stack developer.",
      
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,

    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a href="https://drive.google.com/file/d/1Gl1du3pZ_sh6XgzKV9rk-EgEluQ08eln/view?usp=drivesdk" download style={{ fontSize: "25px", fontWeight: "bold", padding: "10px 20px", display: "inline-block", height:"50px", color: "yellow" }} >
  Download Resume
</a>

        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

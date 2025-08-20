import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/hero.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <div className="hero-content text-neutral-content text-center w-full px-6">
        <div className="w-full">
          <h1
            className={`mb-6 text-6xl font-extrabold leading-tight opacity-0 ${
              inView ? "animate-fadeUp" : ""
            }`}
          >
            Welcome To Al Arab Zone
          </h1>

          <p
            className={`mb-8 text-lg max-w-4xl mx-auto opacity-0 ${
              inView ? "animate-fadeUp delay-200" : ""
            }`}
          >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi. Provident cupiditate voluptatem et in.
            Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi. Provident cupiditate
            voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>

          <button
            className={`px-8 py-3 text-lg font-bold tracking-wide shadow-lg rounded-lg text-black hover:scale-105 transition-transform duration-300 opacity-0 ${
              inView ? "animate-fadeUp delay-500" : ""
            }`}
            style={{
              backgroundColor: "#FFD6BA",
            }}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
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
        backgroundImage: "url(/hero.jpg)"
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <div className="hero-content text-neutral-content text-center w-full px-6">
        <div className="w-full">
          <h4
            className={`mb-6 text-6xl font-extrabold leading-tight opacity-0 pt-[100px] ${
              inView ? "animate-fadeUp" : ""
            }`}
          >
            Welcome To House Sparrow Construction & Maintanence And Al Arab Zone Bike Food Delivery Services
          </h4>

          <p
            className={`mb-8 text-lg max-w-4xl mx-auto opacity-0 ${
              inView ? "animate-fadeUp delay-200" : ""
            }`}
          >
            At House Sparrow, we build more than structures—we build trust. Based in Qatar, 
            our team specializes in high-quality construction, renovation, and complete 
            maintenance solutions for homes, offices, and commercial spaces. From foundations 
            to finishing touches, we ensure durability, modern design, and reliable service
             tailored to your needs.
             <br />
             Alongside construction, we proudly operate Al Arab Zone, a fast and efficient 
             bike delivery service across Qatar. Whether it’s food, groceries, or essentials, 
             we deliver with speed, safety, and reliability—making your daily life easier.
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
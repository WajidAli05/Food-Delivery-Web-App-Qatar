import React, { useRef } from "react";

const laborSkills = [
  {
    title: "Masonry",
    desc: "Brick laying, plastering, and concrete work for strong structures.",
    img: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
  },
  {
    title: "Carpentry",
    desc: "Wood cutting, shuttering, and formwork for construction needs.",
    img: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
  },
  {
    title: "Steel Fixing",
    desc: "Cutting, bending, and tying rebar for reinforced concrete.",
    img: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
  },
  {
    title: "Scaffolding",
    desc: "Safe erection and dismantling of scaffolds at worksites.",
    img: "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  },
  {
    title: "Painting",
    desc: "Wall painting, polishing, and decorative finishing services.",
    img: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
  },
  {
    title: "Plumbing",
    desc: "Pipe fitting, leak fixing, and installation of fixtures.",
    img: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
  },
  {
    title: "Electrical",
    desc: "Basic wiring, sockets, and lighting installation support.",
    img: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
  },
  {
    title: "Tile Fixing",
    desc: "Floor and wall tiling with grouting and leveling expertise.",
    img: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
  },
  {
    title: "Gypsum Work",
    desc: "Drywall partitions, false ceilings, and interior finishing.",
    img: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
  },
  {
    title: "General Labor",
    desc: "Site cleaning, loading, unloading, and assisting tradesmen.",
    img: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
  },
];

const Services = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="relative my-4 py-12 px-6 bg-gradient-to-r from-[#A3DC9A] via-[#DEE791] via-[#FFF9BD] to-[#FFD6BA] rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
      {/* Wavy background effect */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white opacity-20 wave-shape"></div>

      {/* Animated Heading */}
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10 subtle-float drop-shadow-lg">
        Hiring Skills
      </h2>

      {/* Carousel with buttons */}
      <div className="relative flex items-center">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 z-10 rounded-full shadow-xl text-black opacity-60 hover:opacity-100 transition bg-gradient-to-r from-[#A3DC9A] via-[#DEE791] to-[#FFF9BD] w-16 h-16 flex items-center justify-center text-3xl"
        >
          ❮
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="carousel carousel-center rounded-box space-x-6 p-6 overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {laborSkills.map((skill, i) => (
            <div key={i} className="carousel-item relative group">
              <img
                src={skill.img}
                alt={skill.title}
                className="rounded-xl w-80 h-56 object-cover shadow-lg border border-gray-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center text-white p-4 transition-opacity duration-300 rounded-xl">
                <h3 className="text-xl font-bold">{skill.title}</h3>
                <p className="text-sm mt-2">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-2 z-10 rounded-full shadow-xl text-black opacity-60 hover:opacity-100 transition bg-gradient-to-r from-[#FFD6BA] via-[#FFF9BD] to-[#DEE791] w-16 h-16 flex items-center justify-center text-3xl"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Services;
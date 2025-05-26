import React from "react";
import AboutHead from "./AboutMeContent/AboutHead";
import Papers from "./AboutMeContent/Papers";
import SkillCarausel from "./AboutMeContent/SkillCarausel";

const AboutMe = () => {
  const Links = [
    {
      name: "Devnexus Solution",
      cdn: "https://res.cloudinary.com/dikhkks5s/image/upload/v1746528356/unnamed_xxoh51.png",
      pot: "https://devnexus.in/",
    },
    {
      name: "Mappasurus",
      cdn: "https://res.cloudinary.com/dikhkks5s/image/upload/v1746528345/logo-dark_kelhdg.webp",
      pot: "https://www.linkedin.com/company/mappasaurus/",
    },
    {
      name: "WiJungle",
      cdn: "https://res.cloudinary.com/dikhkks5s/image/upload/v1746528317/WiJungle-Logo-White2_a1g1v8.png",
      pot: "https://www.wijungle.com/",
    },
    {
      name: "VenturePact",
      cdn: "https://res.cloudinary.com/dikhkks5s/image/upload/v1746528331/logo_mfxcx8.png",
      pot: "https://venturepact.com/",
    },
  ];
  return (
    <div className="flex flex-col bg-gray-900 p-2">
      <AboutHead />
      <div className="flex flex-col text-center gap-2 mt-2">
        <h2 className="text-xl sm:text-5xl text-amber-300 font-bold">SKILL</h2>
        <SkillCarausel />
      </div>
      <Papers />
      <div className="mt-2 bg-gray-800 px-6 py-10 rounded-lg shadow-lg max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-5xl text-center text-amber-300 font-extrabold mb-6">
          My Experience
        </h2>
        <p className="text-amber-400 text-base sm:text-lg leading-relaxed tracking-wide text-justify">
          I am a skilled Frontend Developer with over 1.5 years of industry
          experience, proficient in building responsive, high-performance web
          applications using
          <span className="font-semibold text-white"> React.js</span>,
          <span className="font-semibold text-white"> Tailwind CSS</span>, and
          modern JavaScript frameworks. I have a strong track record in
          developing reusable UI components, integrating RESTful APIs, and
          managing complex application states using{" "}
          <span className="font-semibold text-white">Redux Toolkit</span> and
          <span className="font-semibold text-white"> Context API</span>.
          <br />
          <br />
          Currently, I am working with
          <span className="font-semibold text-white">
            {" "}
            Devnexus Solutions
          </span>{" "}
          as a Frontend Developer, where I contribute to a diverse range of
          projects across different domains. This role enables me to
          continuously refine my skill set by solving real-world challenges,
          optimizing user experiences, and adhering to best practices in modern
          frontend development.
          <br />
          <br />
          Previously at
          <span className="font-semibold text-white"> Mappasurus</span>, I
          played a key role in delivering scalable, production-ready
          applications with features like dark mode support, advanced search
          filters, responsive layouts, carousels, and dynamic UI interactions. I
          focus on clean code architecture, performance optimization, and
          accessibility to deliver impactful digital experiences aligned with
          business objectives.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6 w-full">
          {Links?.map((e, index) => (
            <a
              key={index}
              href={e.pot}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-gray-800 border-2 border-amber-200 p-4 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 w-32 sm:w-40"
            >
              <img
                src={e.cdn}
                alt={e.name}
                className="h-20 w-auto object-contain"
              />
              <span className="text-sm sm:text-base text-amber-300 font-semibold text-center">
                {e.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

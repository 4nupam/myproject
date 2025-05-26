import React from "react";

export default function AboutHead() {
  return (
    <div className="w-full max-h-full bg-gray-900 p-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around min-h-screen md:min-h-[80vh] px-6 md:px-16 py-12 gap-10">
        {/* Image */}
        <div className="w-full h-full md:w-1/3 md:h-1/3 flex justify-center">
          <img
            src="https://res.cloudinary.com/dikhkks5s/image/upload/v1746504474/aboutmeImage_e4snii.png"
            alt="Anupam Upadhyay"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Text Content */}
        <div className="text-gray-100 space-y-2 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-medium">Hi, I am</h2>
          <h1 className="text-4xl md:text-5xl font-bold">Anupam</h1>
          <p className="text-sm md:text-lg italic">
            Front-end Developer / JavaScript Developer
          </p>
          <p className="text-xs absolute left-10 top-1/2 text-gray-400 mt-2">
            This is not me but I <br /> dearly want an <br /> image like this.
          </p>
        </div>
      </div>
      {/* IT BERRies */}

      <div className="bg-gray-800 w-full max-w-4xl mx-auto mt-6 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-300 mb-4 text-center">
          IT BERRIES
        </h2>
        <p className="text-base sm:text-lg text-amber-400 leading-relaxed text-center">
          I’m a{" "}
          <span className="text-white font-semibold">
            dedicated and innovative professional
          </span>{" "}
          focused on delivering
          <span className="text-white font-semibold">
            {" "}
            high-quality results
          </span>{" "}
          in every project. I approach challenges with a{" "}
          <span className="text-white font-semibold">creative mindset</span> and
          a strong commitment to
          <span className="text-white font-semibold"> excellence</span>. I'm
          also passionate about
          <span className="text-white font-semibold">
            {" "}
            sharing knowledge
          </span>{" "}
          and
          <span className="text-white font-semibold">
            {" "}
            simplifying complex concepts
          </span>{" "}
          to make them accessible and engaging for everyone.
        </p>
      </div>
    </div>
  );
}

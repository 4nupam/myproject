import React from "react";
import { useMyContext } from "./Context/ContextApi";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Main = () => {
  const { quote } = useMyContext();
  const navigate = useNavigate();

  return (
    <main className="bg-gradient-to-br from-amber-800 to-amber-200 flex flex-col items-center justify-center">
      <header className="h-screen w-full bg-cover bg-center bg-no-repeat text-amber-200 sm:px-8 md:px-16">
        <div className="h-full w-full p-2 md:p-3 grid place-items-center text-center">
          <motion.article
            className="max-w-5xl mx-auto space-y-6 text-left rounded-2xl p-4 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Welcome to our website! We're excited to have you here and hope
              you enjoy exploring all that we have to offer. To access exclusive
              content and personalized features, please log in or sign up.
              Creating an account is quick and easy, and it unlocks a more
              tailored experience just for you. Don’t miss out—join our
              community today and start discovering more!
            </p>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4">
              <button
                onClick={() => navigate("/Mywork")}
                className="bg-amber-600 cursor-pointer hover:bg-amber-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200"
              >
                My Work
              </button>
              <button
                onClick={() => navigate("/AboutMe")}
                className="border cursor-pointer border-amber-500 hover:bg-amber-500 text-amber-100 hover:text-black font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200"
              >
                About Me
              </button>
            </div>
          </motion.article>
        </div>
      </header>

      <section className="p-2">
        <motion.section
          className="w-full mt-2 rounded-md overflow-hidden bg-gray-800 shadow-lg relative bg-cover bg-center bg-no-repeat min-h-[400px] flex items-center justify-center text-white text-center px-6 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="absolute inset-0 bg-opacity-50 z-0" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Today's Quote</h2>
            {quote ? (
              <>
                <p className="text-sm md:text-lg w-full italic mb-2">"{quote.quote}"</p>
                <p className="text-md md:text-lg font-semibold">- {quote.author}</p>
              </>
            ) : (
              <p className="text-lg">Loading...</p>
            )}
          </div>
        </motion.section>

        <h2 className="mt-2 mb-2 text-center text-3xl md:text-5xl text-amber-100 font-bold">EXPLORE</h2>

        <section className="flex flex-col gap-4">
          {[{
            title: "BeYoung - Store",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati itaque optio dolor repudiandae labore minima voluptates animi consequuntur sequi.",
            image: "/store.png",
            url: "https://beyoung-app-bice.vercel.app/",
            reverse: false,
            label: "Visit Store"
          }, {
            title: "Tech Thoughts",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati itaque optio dolor repudiandae labore minima voluptates animi consequuntur sequi.",
            image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
            url: "/Tech",
            reverse: true,
            label: "Visit Blog"
          }, {
            title: "My Stories",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati itaque optio dolor repudiandae labore minima voluptates animi consequuntur sequi.",
            image: "https://cdn.pixabay.com/photo/2022/12/01/00/13/antique-7627999_960_720.jpg",
            url: "/Story",
            reverse: false,
            label: "Visit Story Section"
          }, {
            title: "Travel Thoughts",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati itaque optio dolor repudiandae labore minima voluptates animi consequuntur sequi.",
            image: "https://cdn.pixabay.com/photo/2017/08/06/18/29/woman-2594934_960_720.jpg",
            url: "/Travel",
            reverse: true,
            label: "Travel Blog"
          }].map(({ title, text, image, url, reverse, label }, idx) => (
            <motion.article
              key={idx}
              className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-around gap-6 p-6 bg-white rounded-lg shadow-md mt-2`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <figure className="w-full md:w-1/2 flex justify-center">
                <img src={image} alt={title} className="w-full max-w-lg rounded-lg object-cover" />
              </figure>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
                <p className="text-gray-600 mb-4">{text}</p>
                <a
                  onClick={() => url.startsWith("/") ? navigate(url) : null}
                  href={url.startsWith("http") ? url : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 cursor-pointer bg-gray-900 text-amber-500 rounded hover:bg-gray-950 transition"
                >
                  {label}
                </a>
              </div>
            </motion.article>
          ))}
        </section>

        <footer className="Contact_me mt-2 mb-2 rounded-lg w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-gray-800 text-amber-400">
          <span className="text-lg font-medium">Want to contact me?</span>
          <button
            onClick={() => navigate("/Contact")}
            className="bg-amber-500 text-white px-4 cursor-pointer py-2 rounded-lg hover:bg-amber-600 transition duration-300"
          >
            Contact Here
          </button>
        </footer>
      </section>
    </main>
  );
};

export default Main;

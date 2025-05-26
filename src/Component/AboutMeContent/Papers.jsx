import React from "react";

export default function Papers() {
  const Links = [
    {
      name: "VenturePact",
      Link: "https://res.cloudinary.com/dikhkks5s/image/upload/v1746504762/venturepact_certificate_xzfbww.jpg",
    },
    {
      name: "Wijungle",
      Link: "https://res.cloudinary.com/dikhkks5s/image/upload/v1746504776/wijungle_exp_sg60pi.jpg",
    },
    {
      name: "Geeks For Geeks",
      Link: "https://res.cloudinary.com/dikhkks5s/image/upload/v1746504819/1630777575015_mzbhpx.jpg",
    },
    {
      name: "Udemy",
      Link: "https://res.cloudinary.com/dikhkks5s/image/upload/v1746504852/1630777593162_dhxciv.jpg",
    },
    {
      name: "MYCAPTAIN",
      Link: "https://res.cloudinary.com/dikhkks5s/image/upload/v1746505104/1615829941707_rwr0jr.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center py-8 min-h-screen">
      <h2 className="text-amber-400 font-extrabold text-3xl sm:text-5xl text-center mb-8">
        Certificate & Papers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {Links?.map((e, index) => (
          <div
            key={index}
            className="bg-gray-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            <a
              href={e.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={e.Link}
                alt={`Certificate from ${e.name}`}
                className="w-full h-60 object-center object-fill"
              />
              <div className="w-full text-center p-3 bg-gray-500">
                <span className="text-lg font-semibold text-amber-300">
                  {e.name}
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import Card from '../Component/MyWorkContent/WorkCard';
import Data from '../Component/DataFiles/Mywork.json';

export default function Blog() {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0f172a]">
      <h1 className="text-4xl font-bold text-center text-amber-300  mb-12">
        My Projects
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-8xl mx-auto">
        {Data?.map((e, index) => (
          <Card
            key={index}
            image={e.image}
            title={e.name}
            desc={e.desc}
            gitLink={e.github}
            liveLink={e.vercel}
          />
        ))}
      </div>
    </div>
  );
}

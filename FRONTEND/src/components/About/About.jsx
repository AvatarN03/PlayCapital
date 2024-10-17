import React from 'react';
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material"
import { memberNames } from '../../utls/features';


function About() {
  return (
    <>
      
      <section
        className="bg-center bg-cover min-h-80 sm:min-h-screen w-full relative z-0"
        style={{ backgroundImage: "url('/assets/about.png')" }}
      >

{/* w-48 sm:w-80 h-48 sm:h-80  */}
        <div className="flex flex-col sm:p-6 sm:flex-row gap-4 flex-wrap items-center justify-start min-h-screen z-10 relative">
          {
            memberNames.map(member => (
              <div className="relative m-4 group translate-y-0 lg:even:-translate-y-1/3 lg:odd:translate-y-1/3">

                <img
                  src={member.image}
                  alt="Person Name"
                  className=" object-cover rounded-lg w-48 sm:w-80 h-48 sm:h-80  transition-transform duration-300 ease-in-out group-hover:scale-110 -z-10 group-hover:z-20"
                />
                <div className="sm:hidden inset-0 bg-red-300 sm:group-hover:-right-full    sm:group-hover:overflow-visible  bg-opacity-50  transition-opacity duration-300 ease-in-out flex flex-col justify-between md:justify-start items-center sm:items-end p-4 rounded-lg  my-3 group-hover:z-[500px]">
                  {/* Name */}
                  <h2 className="text-white text-2xl font-bold mb-2">{member.name}</h2>


                  <p className="text-white mb-4 px-4 text-center">
                    {member.desc}
                  </p>


                  <div className="flex space-x-4 gap-4">
                    <a href="https://facebook.com" className="p-4 rounded-full bg-rose-200 text-fourth text-xl">
                      <Instagram />
                    </a>
                    <a href="https://twitter.com" className="p-4 rounded-full bg-rose-200 text-fourth text-xl">
                      <LinkedIn />
                    </a>
                    <a href="https://linkedin.com" className="p-4 rounded-full bg-rose-200 text-fourth text-xl">
                      <GitHub />
                    </a>
                  </div>
                </div>
                  



                <div className="absolute hidden  inset-0 bg-black sm:group-hover:-right-full    sm:group-hover:overflow-visible  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out sm:flex flex-col justify-between md:justify-start items-center sm:items-end p-4 rounded-lg  my-3 group-hover:z-[500px]">
                  {/* Name */}
                  <h2 className="text-white text-2xl font-bold mb-2">{member.name}</h2>


                  <p className="text-white mb-4 px-4 text-center">
                    {member.desc}
                  </p>


                  <div className="flex space-x-4 gap-4">
                    <a href="https://facebook.com" className="p-4 rounded-full bg-rose-200 text-fourth text-xl">
                      <Instagram />
                    </a>
                    <a href="https://twitter.com" className="p-4 rounded-full bg-rose-200 text-fourth text-xl">
                      <LinkedIn />
                    </a>
                    <a href="https://linkedin.com" className="p-4 rounded-full bg-rose-200 text-fourth text-xl">
                      <GitHub />
                    </a>
                  </div>
                </div>
              </div>
              
            ))
          }
        </div>
      </section>
    </>
  );
}

export default About;

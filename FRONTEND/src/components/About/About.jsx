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

        <h1 className='text-2xl md:text-3xl lg:text-4xl text-center text-slate-200 font-light my-5 tracking-wide'>Our Team</h1>
        <p className='text-neutral-300 text-base my-5 sm:text-xl font-extralight tracking-wide max-w-5xl mx-auto text-center'>Our diverse team consists of four dedicated individuals: two boys and two girls, each bringing their unique strengths and perspectives. Together, we collaborate to combine creativity, technical expertise, and problem-solving skills to drive innovation and success in our projects.</p>

{/* w-48 sm:w-80 h-48 sm:h-80  */}
        <div className="flex flex-col sm:p-6 sm:flex-row gap-4 flex-wrap items-center justify-start min-h-screen z-[-10] relative">
          {
            memberNames.map(member => (
              <div className="relative m-4 group translate-y-0 lg:even:-translate-y-1/3 lg:odd:translate-y-1/3">

                <img
                  src={member.image}
                  alt="Person Name"
                  className="relative object-cover rounded-3xl  w-48 sm:w-80 h-48 sm:h-80 sm:group-hover:brightness-50  transition-transform duration-300 -z-10 ease-in-out sm:group-hover:scale-110 "
                />
                <div className="sm:hidden -mt-8 z-20 min-h-[300px]  bg-[#8f4bc4f3] sm:group-hover:-right-full    sm:group-hover:overflow-visible  bg-opacity-70  transition-opacity duration-300 ease-in-out flex flex-col justify-between md:justify-start items-center sm:items-end p-4 rounded-xl  my-3 group-hover:z-[500px]">
                  {/* Name */}
                  <h2 className="text-neutral-100 text-2xl font-semibold tracking-wider mb-2">{member.name}</h2>


                  <p className="text-white mb-4 px-4 text-base text-justify tracking-wide font-normal">
                    {member.desc}
                  </p>


                  <div className="flex space-x-4 gap-4">
                    <a target='_blank' href={member.social.linked} className="p-4 rounded-full bg-rose-200 text-fourth text-xl">
                      <LinkedIn />
                    </a>
                    <a target='_blank' href={member.social.insta} className="p-4 rounded-full bg-rose-200 text-fourth text-xl">
                      <Instagram />
                    </a>
                    <a target='_blank' href={member.social.github} className="p-4 rounded-full bg-rose-200 text-fourth text-xl">
                      <GitHub />
                    </a>

                  </div>
                </div>
                  



                <div className="absolute hidden  inset-0 bg-black    sm:group-hover:overflow-visible  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out sm:flex flex-col justify-between  items-center  p-1 rounded-lg  my-3 ">
                  {/* Name */}
                  <h2 className="text-neutral-100 text-2xl font-semibold tracking-wider mb-2">{member.name}</h2>


                  <p className="text-white mb-4 px-4 text-base text-justify font-thin">
                    {member.desc}
                  </p>


                  <div className="flex space-x-4 gap-4">
                    <a target='_blank' href={member.social.linked} className="p-4 rounded-full bg-rose-200 text-fourth text-xl">
                      <LinkedIn />
                    </a>
                    <a target='_blank' href={member.social.insta} className="p-4 rounded-full bg-rose-200 text-fourth text-xl">
                      <Instagram />
                    </a>
                    <a target='_blank' href={member.social.github} className="p-4 rounded-full bg-rose-200 text-fourth text-xl">
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

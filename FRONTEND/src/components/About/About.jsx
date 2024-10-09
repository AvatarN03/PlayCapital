import React from 'react';
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material"

const memberNames = [
  {
    name: "Manasvi Shirshat",
    image:"/assets/naidu.jpg",
    desc: "Hi, I am a good Girl",
    social: {
      linked: "kfdkfjkdlfjkdjfjfkljdf",
      insta: "kfdkfjkdlfjkdjfjfkljdf",
      twitter: "kfdkfjkdlfjkdjfjfkljdf",


    }
  },
  {
    name: "Chirag Dulera",
    image:"/assets/naidu.jpg",
    desc: "lorembfjfjhfffkjkfj",
    social: {
      linked: "kfdkfjkdlfjkdjfjfkljdf",
      insta: "kfdkfjkdlfjkdjfjfkljdf",
      twitter: "kfdkfjkdlfjkdjfjfkljdf",


    }
  },
  {
    name: "Prashanth Naidu",
    image:"/assets/naidu.jpg",
    desc: "lorembfjfjhfffkjkfj",
    social: {
      linked: "kfdkfjkdlfjkdjfjfkljdf",
      insta: "kfdkfjkdlfjkdjfjfkljdf",
      twitter: "kfdkfjkdlfjkdjfjfkljdf",


    }
  },
  {
    name: "Praniti Kubal",
    image:"/assets/naidu.jpg",
    desc: "lorembfjfjhfffkjkfj",
    social: {
      linked: "kfdkfjkdlfjkdjfjfkljdf",
      insta: "kfdkfjkdlfjkdjfjfkljdf",
      twitter: "kfdkfjkdlfjkdjfjfkljdf",


    }
  },
]

function About() {
  return (
    <>
      
      <section
        className="bg-center bg-cover min-h-80 sm:min-h-screen w-full relative z-0"
        style={{ backgroundImage: "url('/assets/bg-1.jpg')" }}
      >


        <div className="flex flex-col p-6 sm:flex-row gap-4 flex-wrap items-center justify-start min-h-screen z-10 relative">
          {
            memberNames.map(member => (
              <div className="relative group w-80 h-80 md:even:-translate-y-1/3 md:odd:translate-y-1/3">

                <img
                  src={member.image}
                  alt="Person Name"
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:z-50"
                />


                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-between items-center rounded-lg z-20 my-3">
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

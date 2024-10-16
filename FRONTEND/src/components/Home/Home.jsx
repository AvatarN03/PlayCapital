import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'
import { AppRegistration, ArrowDownward, ArrowDownwardRounded, Article, Casino, Extension, LockOpen, Money, School } from '@mui/icons-material';
import { userContext } from '../../context/userContext';
import { features } from '../../utls/features';




const Home = () => {

  const data = useContext(userContext)
  console.log(data);

  return (
    

      <main className=' scroll-smooth'>

        {/* Hero-section-1  */}
        <section className=' min-h-[60vh] sm:min-h-[85vh] px-6 py-20 sm:p-4 md:p-2 flex justify-center items-start  flex-col relative group w-full ' >
          <div className="absolute w-[40%]  transition-all ease-in-out duration-1000 h-full rounded-full bg-purple-300  sm:-right-1/3 md:-right-36 top-0 blur-sm hidden sm:block"
   ></div>

          <div className="max-w-7xl flex flex-col gap-7 items-start justify-between h-full sm:m-8">

            <h1 className='md:text-5xl text-5xl tracking-wide sm:text-4xl lg:text-7xl bg-gradient-to-l  bg-clip-text text-transparent from-[#123575] to-[#AFEFEC] sm:tracking-widest mb-6 font-semibold '>Master Your Capital <span className='text-slate-300/50'>Base </span></h1>
            <p className='w-30 sm:w-2/3 md:w-1/2 font-light  text-left text-slate-200  text-2xl sm:text-base md:text-lg lg:text-xl sm:tracking-wider  sm:leading-10' >
              Embark on a financial journey with interactive quizzes and engaging flashcards. Master the rules of finance while enjoying a fun and competitive game experience!
            </p>
           
              <Link to={"/features"} className='rounded-md p-3 sm:p-3 bg-[#2C2C2C] text-white text-sm md:text-base font-semibold '>Explore Now</Link>
            
          </div>

          <div className="absolute left-[50%] hidden md:bottom-20 sm:bottom-10 bottom-4 lg:bottom-32 sm:flex justify-center items-center bg-third animate-bounce  rounded-full ">
            <ArrowDownwardRounded style={{fontSize:"3rem"}} />
          </div>
        </section>

        {/* Her-section-2  */}
        <section className='sm:min-h-screen min-h-80 w-full relative p-6 sm:p-4 md:p-3 ' >
          <img src="/assets/flow1.png" alt="" className='w-full absolute h-full object-cover left-0 top-0  z-0 blur-sm' />
          <div className="max-w-7xl mx-auto my-3 tracking-wider z-10">
            <h1 className='grid-headtext text-center sm:text-left font-semibold  text-white mt-8'>Our Features</h1>
            <p className='grid-subtext text-center sm:text-left text-slate-300 '>We Give the Learning and Fun</p>

            <div className=" py-24 sm:py-32 z-10">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto mt-16 w-full sm:mt-20 lg:mt-24 ">
                  <dl className="grid max-w-xl grid-cols-1 min-h-80  gap-10 lg:max-w-none lg:grid-cols-3">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative flex justify-evenly flex-col items-center p-6 feature rounded-xl border-2 border-slate-300 cursor-crosshair">
                        <dt className="font-semibold leading-7  text-white text-3xl">
                          
                          {feature.name}
                        </dt>
                        <dd className="mt-2 text-base leading-10 tracking-wider text-slate-200">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero-section-3 => Contact Us  */}
        <Contact id="contact" />
      </main>
    

  )
}

export default Home
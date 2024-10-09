import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'
import { AppRegistration, ArrowDownward, ArrowDownwardRounded, Article, Casino, Extension, LockOpen, Money, School } from '@mui/icons-material';
import { userContext } from '../../context/userContext';


const features = [
  {
    name: 'Play Money',
    description:
      'Our Platform provides the Learning experience uniqulty.',
    icon: Money,
  },
  {
    name: 'Fun',
    description:
      'Our Platform provides the Learning experience by Introducing the 3 games ',
    icon: Extension,
  },
  {
    name: 'Blog',
    description:
      'Our Platform provides you to explore the blog area related to FINANCE.',
    icon: Article,
  },
  {
    name: 'Reliable ',
    description:
      'Our Platform is reliable and secure with authentication',
    icon: LockOpen,
  },
]

const Home = () => {

  const data = useContext(userContext)
  console.log(data);

  return (
    

      <main className='bg-gradient-to-br from-[#352894] to-[#6a59e0] scroll-smooth'>
        {/* Hero-section-1  */}
        <section className=' min-h-80 sm:h-screen px-6 py-20 sm:p-4 md:p-2 flex justify-center items-center text-center flex-col  bg-cover bg-center relative ' style={{ backgroundImage: "url('/assets/bg-4.jpg')" }}>
          <div className="max-w-7xl flex flex-col gap-3 items-center justify-between h-1/2 ">


            <img src="/assets/money.png" className='absolute right-2 sm:w-20 w-10 top-11 md:w-40 lg:w-80 animate-pulse ' alt="" />
            <img src="/assets/coinbg.png" className='absolute  left-2 top-11 w-1/4 animate-pulse ' alt="" />
            <h1 className='md:text-5xl text-2xl sm:text-4xl lg:text-7xl text-center text-primary tracking-widest font-bold underline underline-offset-8 '>Master Your Capital Base</h1>
            <p className='w-30 sm:w-1/2 mx-auto text-justify text-secondary text-xs sm:text-base md:text-lg lg:text-xl tracking-wider leading-loose' >
              Embark on a financial journey with interactive quizzes and engaging flashcards. Master the rules of finance while enjoying a fun and competitive game experience!
            </p>
            <button className="w-fit h-fit  sm:h-20 bg-fourth rounded-lg border border-primary">
              <Link to={"/features"} className='py-2 px-3 sm:p-3 text-secondary text-sm md:text-base font-semibold '>Explore Now</Link>
            </button>
          </div>
          <div className="absolute md:bottom-20 sm:bottom-10 bottom-4 lg:bottom-32 flex justify-center items-center bg-third animate-bounce  rounded-full ">
            <ArrowDownwardRounded />
          </div>
        </section>

        {/* Her-section-2  */}
        <section className='sm:min-h-screen min-h-80 w-full relative p-6 sm:p-4 md:p-3 ' >
          <img src="/assets/flow1.png" alt="" className='w-full absolute h-full object-cover left-0 top-0  z-0' />
          <div className="max-w-7xl mx-auto my-3">
            <h1 className='grid-headtext text-center sm:text-left text-secondary mt-8'>Features</h1>
            <p className='grid-subtext text-center sm:text-left text-third '>We Give the Learning and Fun</p>

            <div className=" py-24 sm:py-32 z-10">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative p-6 pl-16 bg-third rounded-md">
                        <dt className="font-semibold leading-7  text-fourth  text-2xl">
                          <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                            <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                          </div>
                          {feature.name}
                        </dt>
                        <dd className="mt-2 text-base leading-7 tracking-wider text-rose-100">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero-section-3 => Vision  */}
        <section className="max-w-7xl mx-auto my-20 px-2 sm:px-10 md:px-20 sm:h-screen min-h-96 bg-center bg-cover relative">
          <h1 className='grid-headtext text-third '>Our Vision</h1>
          <p className='grid-subtext text-secondary'>Empowering individuals with essential financial knowledge through an engaging and interactive gaming experience. We envision a community where learning about finance is enjoyable, fostering smart decision-making for a brighter financial future."

          </p>
          <div className="w-[95%] mx-auto h-full flex  gap-1 sm:gap-4">
            <div className="flex flex-col justify-around gap-4 w-1/2 mr-3 ">
              <p className='mt-4 sm:mt-10 md:mt-20 text-xl sm:text-2xl  text-rose-200'>Our vision is to empower individuals with essential financial knowledge through an engaging and interactive gaming experience. By combining quizzes, ruleboards, and flashcards, we aim to create a dynamic learning environment that fosters financial literacy, promotes smart decision-making, and encourages users to take control of their financial futures. </p>
              <div className="flex justify-between gap-5">
                <img src="/assets/bg-1.jpg" alt="Description of first image" className='w-1/2 hidden sm:block bg-center bg-cover rounded-xl h-auto object-cover' />
                <img src="/assets/v-1.jpg" alt="Description of second image" className='w-full sm:w-1/2 h-auto bg-center bg-cover rounded-xl object-cover' />
              </div>
            </div>
            <div className="w-1/2 h-[80%] m-auto bg-center bg-cover rounded-md shadow-xl shadow-purple-400 overflow-hidden">
              <img src="/assets/v-3.jpg" alt="Description of the third image" className='h-full w-full object-cover' />
            </div>
          </div>
        </section>


        <Contact id="contact" />
      </main>
    

  )
}

export default Home
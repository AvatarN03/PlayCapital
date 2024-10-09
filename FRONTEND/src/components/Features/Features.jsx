import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section className="bg-center bg-cover py-6 px-1 sm:px-8" style={{backgroundImage:"url('/assets/bg-2.jpg')"}} >

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen relative ">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mt-6 text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">
            Features
          </h2>
          <p className="mt-4 text-3xl font-bold leading-relaxed text-rose-400">
            The Benefits of using our product
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 grid-rows-4 gap-y-8 text-center sm:grid-cols-2 sm:grid-rows-3 sm:gap-12 lg:grid-cols-3 lg:grid-rows-2 border-white border-2 rounded-xl p-2 sm:p-10 backdrop-blur-lg">
          {/* Card 1 */}
          <div className='col-span-full sm:col-span-1 bg-gradient-to-tr from-third  to-primary p-4 rounded-md flex flex-col justify-between min-h-full'>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-third">
                <img src="/assets/quiz.png" alt="" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-black">Quiz Game</h3>
              <p className="mt-4 text-xl text-left text-black/80">
              Test your financial knowledge with the PlayCapital. Play through engaging questions to sharpen your money skills and boost financial literacy!
              </p>
            </div>
            <Link to={"/features/quiz"} className="mt-4 rounded-md border-white py-4 text-primary bg-fourth  hover:bg-violet-900 transition duration-75 ease-linear">
              Click to Play
            </Link>
          </div>

          {/* Card 2 */}
          <div className='col-span-full sm:col-span-1 bg-gradient-to-tr from-third  to-primary p-4 rounded-md flex flex-col justify-between min-h-full'>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <img src="/assets/memory.png" alt="" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-black">Memory Flash</h3>
              <p className="mt-4 text-xl text-left text-black/80">
              Strengthen your financial memory by flipping through flash cards with key concepts, helping you learn and retain important information.
              </p>
            </div>
            <Link to={"/features/memorygame"} className="mt-4 rounded-md border-white py-4 text-primary bg-fourth  hover:bg-violet-900 transition duration-75 ease-linear">
              Click to Play
            </Link>
          </div>

          {/* Card 3 */}
          <div className='col-span-full sm:col-span-2 lg:col-span-1 bg-gradient-to-tr from-third  to-primary p-4 rounded-md flex flex-col justify-between min-h-full'>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <img src="/assets/rule.png" alt="" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-black">Rule Board</h3>
              <p className="mt-4 text-xl text-left text-black/80">
              Stay informed with clear, easy-to-understand game rules that guide you through the gameplay and ensure a fair challenge for all players.
              </p>
            </div>
            <Link to={"/features/ruleboard"} className="mt-4 rounded-md border-white py-4 text-primary bg-fourth hover:bg-violet-900 transition duration-75 ease-linear">
              Click to Play
            </Link>
          </div>

          {/* Card 4 */}
          <div className='col-span-full bg-gradient-to-tr from-third  to-primary p-4 rounded-md flex flex-col justify-between min-h-full'>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <img src="/assets/monoplo.png" alt="" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-black">Monopoly</h3>
              <p className="mt-4 text-xl text-left sm:text-center text-black/80">Navigate the financial world, buy properties, pay taxes, and manage resources strategically to outlast your opponents and build your wealth!.
              </p>
            </div>
            <button disabled to={"/monopoly"} className="mt-4 rounded-md border-white py-4 text-primary bg-fourth  hover:bg-violet-900 transition duration-75 ease-linear">
              Coming Soon ..
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

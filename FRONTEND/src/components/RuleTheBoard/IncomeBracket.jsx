import React from 'react';
import { Link } from 'react-router-dom';

function IncomeBracket() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full min-h-fit m-auto grid place-items-center text-white text-sm">

        <Link to={"/features"} className=' absolute left-0 top-[90%] sm:top-16 p-1 sm:p-2 rounded-full text-base bg-neutral-400 aspect-square flex justify-center items-center text-black'>Home</Link>
        <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold tracking-wide sm:tracking-wider text-[#94cfd8]">Welcome to Rule Board</h1>
        <h3 className="text-base sm:text-2xl text-slate-200 font-semibold">Description of the Game:</h3>
        <div className="mx-auto w-[90%] sm:w-[70%] md:w-[55%] bg-[#8175ed] text-slate-300 rounded-md p-4 space-y-4">
          <p>
            <span className="text-[#682444] font-semibold tracking-wide text-base ">Objective:</span><br />
            Build your financial empire by making strategic purchases, borrowing wisely, and avoiding unnecessary expenses. The player with the highest capital at the end wins!
          </p>
          <p>
            <span className="text-[#682444] font-semibold tracking-wide text-base">Turn Options:</span><br />
            - <span className="font-bold text-sm ">Borrow:</span> Take a loan to increase your cash flow, but remember, borrowed money incurs interest, which will reduce your capital over time.<br />
            - <span className="font-bold text-sm ">Purchase:</span> Buy properties, stocks, or other assets. These assets can grow your capital through appreciation or rental income.<br />
            - <span className="font-bold text-sm s">Pass:</span> Skip a turn without borrowing or purchasing. Sometimes holding off is the best move to avoid debt or manage risk.
          </p>

          <p>
            <span className="text-[#682444] font-semibold tracking-wide text-base sm:text-xl">Winning:</span> The game ends when a set number of turns is completed or when all assets have been acquired. The player with the highest net worth wins.
          </p>

          <p className='text-sm sm:text-base text-center font-bold tracking-widest'>Enjoy building your PlayCapital!</p>
        </div>
        <Link to="/gameconnect" className="mt-6">
          <button className="bg-[#99d5db] text-neutral-800 font-semibold py-2 px-6 rounded-lg hover:bg-[#83c6cc] transition duration-200 mb-4">
            Get Started
          </button>
        </Link>
      </div>
    </div>

  );
}

export default IncomeBracket;

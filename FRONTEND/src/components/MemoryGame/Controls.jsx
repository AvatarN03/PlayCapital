import React from 'react';

const Controls = ({ gameStarted, startGame, totalFlips, totalTime }) => (
    <div className="controls">
    <button onClick={startGame} disabled={gameStarted} id='start'>
        Start
    </button>
    <div className="stats">
        <div className="moves">{totalFlips} moves</div>
        <div className="timer">Time: {totalTime} sec</div>
    </div>
    </div>
);

export default Controls;

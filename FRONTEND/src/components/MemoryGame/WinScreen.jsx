import React from 'react';

const WinScreen = ({ totalFlips, totalTime }) => (
    <div className="win">
    <span className="win-text">
        You won!<br />
        with <span className="highlight">{totalFlips}</span> moves<br />
        under <span className="highlight">{totalTime}</span> seconds
    </span>
    </div>
);

export default WinScreen;

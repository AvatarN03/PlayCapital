import React from 'react';

const Card = ({ card, isFlipped, flipCard }) => (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
    <div className="card-front"></div>
    <div className="card-back">{card.word}</div>
    </div>
);

export default Card;

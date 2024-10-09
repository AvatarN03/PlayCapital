import React, { useState, useEffect } from 'react';
import './memory-game.css';
import Controls from './Controls';
import Card from './Card';
import WinScreen from './WinScreen';

const definitions = [
  { "Asset": "Something valuable that provides future benefit" },
  { "Liability": "Financial debts owed to another party" },
  { "Income": "Money received, especially regularly, from work or investments" },
  { "Profit": "Financial gain when revenue exceeds expenses" },
  { "Revenue": "Income from selling goods or services before deducting expenses" },
  { "Stock": "Share of ownership in a corporation" },
  { "Mortgage": "A mortgage is a property-buying loan. If not repaid, the lender can take the property." },
  { "Depreciation": "Decrease in an asset's value over time" },
];

function MemoryGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);
  const [totalFlips, setTotalFlips] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    generateGame();
  }, []);

  useEffect(() => {
    let timer;
    if (gameStarted) {
      timer = setInterval(() => {
        setTotalTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const generateGame = () => {
    let wordCards = [];
    definitions.forEach((def) => {
      const [key, value] = Object.entries(def)[0];
      wordCards.push({ word: key, type: 'word', matched: false });
      wordCards.push({ word: value, type: 'definition', matched: false });
    });
    setCards(shuffleArray(wordCards));
  };

  const startGame = () => {
    setGameStarted(true);
    setTotalTime(0);
    setTotalFlips(0);
    setCards((prevCards) => prevCards.map(card => ({ ...card, matched: false })));
    setFlippedCards([]);
  };

  const flipCard = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index) && !cards[index].matched) {
      setFlippedCards((prev) => [...prev, index]);
      setTotalFlips((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (
        (firstCard.type === 'word' && secondCard.type === 'definition' && firstCard.word === secondCard.word) ||
        (firstCard.type === 'definition' && secondCard.type === 'word' && firstCard.word === secondCard.word)
      ) {
        // Mark the cards as matched
        setCards((prevCards) => {
          const updatedCards = [...prevCards];
          updatedCards[firstIndex].matched = true;
          updatedCards[secondIndex].matched = true;
          return updatedCards;
        });
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, cards]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, #eeb264, #9c5e0e)',
        fontFamily: 'Arial, Helvetica, sans-serif',
        overflow: 'hidden',
      }}
    >
      <div className="game">
        <Controls
          gameStarted={gameStarted}
          startGame={startGame}
          totalFlips={totalFlips}
          totalTime={totalTime}
        />
        <div className="board-container">
          <div className="board">
            {cards.map((card, index) => (
              <Card
                key={index}
                card={card}
                isFlipped={flippedCards.includes(index) || card.matched}
                flipCard={() => flipCard(index)}
              />
            ))}
          </div>
        </div>
        {!cards.some((card) => !card.matched) && gameStarted && (
          <WinScreen totalFlips={totalFlips} totalTime={totalTime} />
        )}
      </div>
    </div>
  );
}

export default MemoryGame;

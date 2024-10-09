import React, { useState, useRef, useEffect } from 'react';
import './assets/Quiz.css';
import { easyLevelData } from './assets/easyleveldata';
import { mediumLevelData } from './assets/mediumleveldata';
import { hardLevelData } from './assets/hardleveldata';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(easyLevelData[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [level, setLevel] = useState(1);
  const [totalScore, setTotalScore] = useState(0);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const option_array = [Option1, Option2, Option3, Option4];
  const currentData = level === 1 ? easyLevelData : (level === 2 ? mediumLevelData : hardLevelData);

  useEffect(() => {
    setQuestion(currentData[index]);
  }, [index, level, currentData]);

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  }

  const next = () => {
    if (lock === true) {
      if (index === 5 - 1) {
        setResult(true);
        setTotalScore(totalScore + score);
        return;
      }

      setIndex(index + 1);
      setLock(false);
      option_array.forEach(option => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(easyLevelData[0]);
    setScore(0);
    setTotalScore(0);
    setLock(false);
    setResult(false);
    setLevel(1);
  }

  const nextLevel = () => {
    if (level === 1) {
      setIndex(0);
      setQuestion(mediumLevelData[0]);
      setLock(false);
      setResult(false);
      setLevel(2);
    } else if (level === 2) {
      setIndex(0);
      setQuestion(hardLevelData[0]);
      setLock(false);
      setResult(false);
      setLevel(3);
    }
    setScore(0); // Reset score for the next level
  }

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      {!result ? (
        <>
          <h2>{index + 1}. {question.question}</h2>
          <ul>
            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">{index + 1} of {5} questions</div>
        </>
      ) : (
        <>
          <h2>You Scored {score} out of {5}</h2>
          <button onClick={reset}>Reset</button>
          {level === 1 && score >= 3 && <button onClick={nextLevel}>Go To Medium Level</button>}
          {level === 2 && score >= 4 && <button onClick={nextLevel}>Go To Hard Level</button>}
          {level === 3 && (
            <>
              <h2>Thank You!</h2>
              <h2 className="final-score">Your Final Score is {totalScore} out of 15</h2>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;

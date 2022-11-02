import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [score, setScore] = useState(0);
  //   const [streak, setStreak] = useState(0);
  const [highscore, setHighscore] = useState(0);

  function getRandomColor() {
    var characters = "0123456789ABCDEF";
    var color = "#";
    for (let i = 0; i < 6; i++) {
      color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getColor() {
    var characters = "0123456789ABCDEF";
    var color = "#";
    for (let i = 0; i < 6; i++) {
      color += characters[Math.floor(Math.random() * 16)];
    }
    setColor(color);
    //shuffles answer choices in place
    function Answers(arr) {
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
    }
    setAnswers(Answers([color, getRandomColor(), getRandomColor()]));
    console.log(answers);
  }

  useEffect(() => {
    getColor();
  }, []);

  function handleAnswerClicked(answer) {
    if (answer === color) {
      setIsWrong(false);
      getColor();
      setScore(score + 1);
      if (score >= highscore) {
        setHighscore(score + 1);
      }
    } else {
      setIsWrong(true);
      setScore(0);
    }
  }

  console.log(answers);
  console.log(color);

  return (
    <div className="App">
      <div>
        <div className="colorBox" style={{ background: color }}></div>
        <button onClick={() => handleAnswerClicked(answers[0])}>
          {answers[0]}
        </button>
        <button onClick={() => handleAnswerClicked(answers[1])}>
          {answers[1]}
        </button>
        <button onClick={() => handleAnswerClicked(answers[2])}>
          {answers[2]}
        </button>
        {isWrong && <div className="wrongAnswer">Wrong!!</div>}
        <h2>Your score is {score}</h2>
        <h2>Your highscore is {highscore}</h2>
      </div>
    </div>
  );
}

export default App;

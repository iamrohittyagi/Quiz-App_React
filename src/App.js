import { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "India's only Naval Aviation Museum is located in?",
      answerOptions: [
        { answerText: "Karnataka", isCorrect: false },
        { answerText: "Kerala", isCorrect: false },
        { answerText: "Tamil Nadu", isCorrect: false },
        { answerText: "Goa", isCorrect: true },
      ],
    },
    {
      questionText:
        "The Disaster Management Act was enacted in India in the year?",
      answerOptions: [
        { answerText: "2003", isCorrect: false },
        { answerText: "2005", isCorrect: true },
        { answerText: "2006", isCorrect: false },
        { answerText: "2009", isCorrect: false },
      ],
    },
    {
      questionText:
        "The headquaters of Western Air Command of Air Force is located at",
      answerOptions: [
        { answerText: "Nagpur", isCorrect: false },
        { answerText: "Mumbai", isCorrect: false },
        { answerText: "Jodhpur", isCorrect: false },
        { answerText: "New Delhi", isCorrect: true },
      ],
    },
    {
      questionText:
        "The aircraft carrier Admiral Gorshkov which was brought by india from russua is renamed as?",
      answerOptions: [
        { answerText: "INS Godavari", isCorrect: false },
        { answerText: "INS Trishul", isCorrect: false },
        { answerText: "INS Vikramaditya", isCorrect: true },
        { answerText: "INS Trishul", isCorrect: false },
      ],
    },
    {
      questionText:
        "How many states in india have Legislative Council (Vidhan Parishad)",
      answerOptions: [
        { answerText: "6", isCorrect: true },
        { answerText: "8", isCorrect: false },
        { answerText: "11", isCorrect: false },
        { answerText: "12", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [correctAnswer, setCorrectAnswer] = useState(0);

  

  const hamdleAnswerButtonclick = (isCorrect) => {
    if (isCorrect == true) {
      //   alert("This Answer Is Correct");
      setCorrectAnswer(correctAnswer + 1);
    } 
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert("You have Completed the Quiz");
      setShowScore(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setCorrectAnswer(0);
  };

  return (
    <div className="app">
      <div className="quiz-box">
        {showScore ? (
          <div className="score-section">
            <div>
              You scored {correctAnswer} out of {questions.length}
            </div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : (
          <>
            <div className="question">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="questionText">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answers">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    hamdleAnswerButtonclick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

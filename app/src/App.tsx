import { useState } from "react"
import { Difficulty, fetchQuizQuestions, type QuestionState } from "./API";
import QuestionsCard from "./components/Questions/Questions"
//Styes
import { GlobalStyle,Wrapper } from "./App.styles";



const TOTAL_QUESTIONS = 10;

export type AnswerObjetct = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string
}

function App() {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnwsers, setUserAnswers] = useState<AnswerObjetct[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivial = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0)
    setUserAnswers([])
    setNumber(0);
    setLoading(false)

    console.log("QUESTIONS", questions)

  }


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //Users answer
      const answer = e.currentTarget.value;
      //Check answer against correct answer
      const correct = questions[number].correct_answer === answer
      //Add score if answer is correct
      if (correct) setScore(prev => prev + 1)
      //Save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    //Move on to the next question if not the last question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }

  }
  return (
    <>
      <GlobalStyle/>
      <Wrapper className="App">
        <h1>REACT QUIZ</h1>
        {gameOver || userAnwsers.length === TOTAL_QUESTIONS ? <button className="start" onClick={startTrivial}>
          Start
        </button> : null}
        {!gameOver ? <p className="Score">Score : {score}</p> : null}
        {loading && <p>Loading Questions ...</p>}
        {!loading && !gameOver && <QuestionsCard
          questitonNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          questiton={questions[number].question}
          answers={questions[number].answers}
          userAnswers={userAnwsers ? userAnwsers[number] : undefined}
          callback={checkAnswer}

        />}

        {!gameOver && !loading && userAnwsers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  )
}

export default App

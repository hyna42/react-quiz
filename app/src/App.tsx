import { useState } from "react"
import { Difficulty, fetchQuizQuestions, type QuestionState } from "./API";
// import QuestionsCard from "./components/Questions/Questions"


const TOTAL_QUESTIONS = 10;

type AnswerObjetct = {
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
    return
  }


  const checkAnswer: React.MouseEvent<HTMLButtonElement> = (e) => {
    return
  }

  const nextQuestion = () => {
    return
  }

  // useEffect(() => {
  //   const data = fetchQuizQuestions(10, Difficulty.EASY)
  //   console.log("TEST:::", fetchQuizQuestions(10, Difficulty.EASY))
  // }, [])

  console.log("TEST:::", fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))


  // console.log(startTrivial)
  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivial}>
        Start
      </button>
      <p className="Score">Score :</p>
      <p>Loading Questions ...</p>
      {/* <QuestionsCard
        questitonNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        questiton={questions[number].question}
        answers={questions[number].answers}
        userAnswers={userAnwsers ? userAnwsers[number] : undefined}
        callback={checkAnswer}

      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  )
}

export default App

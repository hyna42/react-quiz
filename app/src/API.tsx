// import { shuffleArray } from "./utils"

import { shuffleArray } from "./utils"

// fetching datas from API
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export type Question = {
    question: string,
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    type: string
}

type Data = {
    response_code: string,
    results: Question[]
}
export type QuestionState = Question & { answers: string[] }

export const fetchQuizQuestions = async (
    amount: number,
    difficulty: Difficulty
): Promise<QuestionState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`

    const data: Data = await (await fetch(endpoint)).json()
    if (data.results.length > 0) {

        const questions = data.results.map((question: Question) => (
            {
                ...question,
                answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
            }
        ))

        return questions

    }

    return []



}
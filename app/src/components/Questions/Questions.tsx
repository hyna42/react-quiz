import type { AnswerObjetct } from "../../App";

import { Wrapper, ButtonWrapper } from "./Questions.styles";

type Props = {
    questiton: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswers: AnswerObjetct | undefined;
    questitonNr: number;
    totalQuestions: number;
}

const QuestionsCard = ({ questiton, answers, callback, userAnswers, totalQuestions, questitonNr }: Props) => {
    return (
        <>
            <Wrapper className="number" >
                <p>
                    Question: {questitonNr} / {totalQuestions}
                </p>
                <p dangerouslySetInnerHTML={{ __html: questiton }} />
                <div>
                    {answers.map((answer, index) => (
                        <ButtonWrapper
                            key={index}
                            $correct={userAnswers?.correctAnswer === answer}
                            $userClicked={userAnswers?.answer === answer}
                        >
                            <button disabled={userAnswers ? true : false} onClick={callback} value={answer}>
                                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                            </button>
                        </ButtonWrapper>
                    ))}
                </div>
            </Wrapper>
        </>
    )
}

export default QuestionsCard
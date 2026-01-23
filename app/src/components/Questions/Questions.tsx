import type { AnswerObjetct } from "../../App";

type Props = {
    questiton: string;
    answers: string[];
    callback: (e:React.MouseEvent<HTMLButtonElement>) => void;
    userAnswers: AnswerObjetct | undefined;
    questitonNr: number;
    totalQuestions: number;
}

const QuestionsCard = ({ questiton, answers, callback, userAnswers, totalQuestions, questitonNr }: Props) => {
    return (
        <div className="number" >
            <p>
                Question: {questitonNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: questiton }} />
            <div>
                {answers.map((answer,index) => (
                    <div key={index}>
                        <button disabled={userAnswers ? true : false} onClick={callback} value={answer}>
                            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionsCard
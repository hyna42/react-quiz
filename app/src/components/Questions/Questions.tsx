type Props = {
    questiton: string;
    answers: string[];
    callback: () => void;
    userAnswers: undefined;
    questitonNr: number;
    totalQuestions: number
}

const QuestionsCard = ({ questiton, answers, callback, userAnswers, totalQuestions, questitonNr }: Props) => {
    return (
        <div className="number">
            <p>
                Question: {questitonNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: questiton }} />
            <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswers} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}></span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionsCard
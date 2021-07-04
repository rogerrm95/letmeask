import { useParams } from "react-router-dom";
import { useRoom } from "../hooks/useRoom"; // Hook //
// Components //
import { Header } from "../components/Header";
import { NoQuestions } from "./../components/NoQuestionsMessage";
import { Questions } from "./../components/Questions";


import '../styles/room.scss'

type CodeProps = {
    id: string
}

export function AdminRoom() {
    const { id } = useParams<CodeProps>()
    const { questions, title } = useRoom(id)
    return (
        <div className='page-admin-room'>
            <Header admin={true} />

            <main>
                <div className='admin-room-head'>
                    <h2>{title}</h2>
                    {questions.length > 0 && <span>{questions.length} - pergunta(s)</span>}
                </div>

                {
                    questions.length > 0 ? (<Questions isAdmin questions={questions} />) : <NoQuestions />
                }
            </main>
        </div>
    )
}
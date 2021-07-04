import toast, { Toaster } from "react-hot-toast";
import { database } from "../services/firebase";
// Hooks //
import { useHistory, useParams } from "react-router-dom";
import { useRoom } from "../hooks/useRoom";
// Components //
import { Header } from "../components/Header";
import { NoQuestions } from "./../components/NoQuestionsMessage";
import { Question } from "./../components/Question";

import DeleteIcon from '../assets/delete.svg' // Icon //
import '../styles/room.scss'

type CodeProps = {
    id: string
}

export function AdminRoom() {
    const { id } = useParams<CodeProps>()
    const { push } = useHistory()
    const { questions, title } = useRoom(id)

    async function handleToRemoveQuestion(questionId: string) {
        await database.ref(`rooms/${id}/questions/${questionId}`).remove()
    }

    async function handleCloseRoom() {
        try {
            await database.ref(`rooms/${id}`).update({
                closedAt: new Date()
            })

            push('/')
        }
        catch (error) {
            toast.error("Erro ao encerrar sala")
        }
    }

    return (
        <div className='page-admin-room'>
            <Header admin closeRoom={() => handleCloseRoom()} />

            <main>
                <div className='admin-room-head'>
                    <h2>{title}</h2>
                    {questions.length > 0 && <span>{questions.length} - pergunta(s)</span>}
                </div>

                {
                    questions.length > 0 ?
                        (
                            questions.map(question => (
                                <Question content={question.content} author={question.author} key={question.id}>
                                    <button className='delete-button' onClick={() => handleToRemoveQuestion(question.id)}>
                                        <img src={DeleteIcon} alt="Lixeira" aria-label='Deletar pergunta' />
                                    </button>
                                </Question>
                            ))
                        )
                        : <NoQuestions />
                }
            </main>
            <Toaster position='top-center' />
        </div>
    )
}
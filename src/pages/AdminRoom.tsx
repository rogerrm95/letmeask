import { useState } from "react";
import { database } from "../services/firebase";
import toast, { Toaster } from "react-hot-toast";
// Hooks //
import { useHistory, useParams } from "react-router-dom";
import { useRoom } from "../hooks/useRoom";
// Components //
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";
import { NoQuestions } from "./../components/NoQuestionsMessage";
import { Question } from "./../components/Question";
// Icons //
import DeleteIcon from '../assets/delete.svg'
import CheckIcon from '../assets/check.svg'
import AnswerIcon from '../assets/answer.svg'
// SCSS //
import '../styles/room.scss'
import { useAuth } from "../hooks/useAuth";
import { FiLogOut } from "react-icons/fi";

type CodeProps = {
    id: string
}

export function AdminRoom() {
    const { id } = useParams<CodeProps>()
    const { push } = useHistory()
    const { user, signOutWithGoogle } = useAuth()
    const { questions, title } = useRoom(id)

    const [questionIdForModal, setQuestionIdForModal] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    async function handleCheckQuestionAsAnswered(questionId: string) {
        await database.ref(`rooms/${id}/questions/${questionId}`).update({
            isAnswered: true
        })
    }

    async function handleHighlightQuestion(questionId: string) {
        await database.ref(`rooms/${id}/questions/${questionId}`).update({
            isHighLighted: true
        })
    }

    function openModalForDeleteQuestion(questionId: string) {
        setQuestionIdForModal(questionId)
        setIsModalOpen(true)
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

    async function logOut(){
        await signOutWithGoogle()
        push('/admin/home')
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
                                <Question
                                    key={question.id}
                                    content={question.content}
                                    author={question.author}
                                    isHighLighted={question.isHighLighted}
                                    isAnswered={question.isAnswered}
                                >
                                    {!question.isAnswered && (
                                        <>
                                            <button
                                                className='check-button'
                                                onClick={() => handleCheckQuestionAsAnswered(question.id)}>
                                                <img src={CheckIcon} alt="Marcar pergunta como respondida" />
                                            </button>

                                            <button
                                                className='anwser-button'
                                                onClick={() => handleHighlightQuestion(question.id)}
                                            >
                                                <img src={AnswerIcon} alt="Dar destaque a pergunta" />
                                            </button>

                                        </>
                                    )}

                                    <button
                                        className='delete-button'
                                        onClick={() => openModalForDeleteQuestion(question.id)}>
                                        <img src={DeleteIcon} alt="Lixeira" aria-label='Deletar pergunta' />
                                    </button>
                                </Question>
                            ))
                        )
                        : <NoQuestions />
                }
            </main>

            {
                user && (
                    <button className='button-logout' type='button' onClick={() => push('/admin/home')}>
                        <FiLogOut size='20' />
                    </button>
                )
            }

            <Toaster position='top-center' />
            <Modal
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
                questionId={questionIdForModal}
                roomId={id}
            />
        </div>
    )
}
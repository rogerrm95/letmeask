import { useState } from "react";
import { database } from "../services/firebase";
// Hooks //
import { useHistory, useParams } from "react-router-dom";
import { useRoom } from "../hooks/useRoom";
import { useAuth } from "../hooks/useAuth";
// Components //
import { Header } from "../components/Header";
import { ModalDeleteAnwser } from "../components/ModalDeleteAnwser";
import { ModalClosedAtRoom } from "../components/ModalClosedAtRoom";
import { NoQuestions } from "./../components/NoQuestionsMessage";
import { Question } from "./../components/Question";
import { Spinner } from "../components/Spinner";
// Icons //
import DeleteIcon from '../assets/delete.svg'
import CheckIcon from '../assets/check.svg'
import AnswerIcon from '../assets/answer.svg'
import { FiLogOut } from "react-icons/fi";
// SCSS //
import '../styles/room.scss'
import { SwitchButton } from "../components/SwitchButton";

type CodeProps = {
    id: string
}

export function AdminRoom() {
    const { id } = useParams<CodeProps>()
    const { push } = useHistory()
    const { user } = useAuth()
    const { questions, title, isLoading } = useRoom(id)

    const [questionIdForModal, setQuestionIdForModal] = useState('')
    const [isModalForClosedAtRoom, setIsModalForClosedAtRoom] = useState(false)
    const [isModalDeleteToAnwserOpen, setIsModalDeleteToAnwserOpen] = useState(false)

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
        setIsModalDeleteToAnwserOpen(true)
    }

    function openModalForClosedAtRoom() {
        setIsModalForClosedAtRoom(true)
    }

    if (isLoading) return <Spinner color='#FF59F8' size='72' speedMultiplier={0.5} />

    return (
        <div className='page-admin-room'>
            <Header admin closeRoom={() => openModalForClosedAtRoom()} />

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

            <ModalDeleteAnwser
                setIsModalOpen={setIsModalDeleteToAnwserOpen}
                isModalOpen={isModalDeleteToAnwserOpen}
                questionId={questionIdForModal}
                roomId={id}
            />
            <ModalClosedAtRoom
                setIsModalOpen={setIsModalForClosedAtRoom}
                isModalOpen={isModalForClosedAtRoom}
                roomId={id}
            />
        </div>
    )
}
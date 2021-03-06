import { useState } from "react";
import { database } from "../services/firebase";
// Hooks //
import { useHistory, useParams } from "react-router-dom";
import { useRoom } from "../hooks/useRoom";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";
// Components //
import { Header } from "../components/Header";
import { ModalDeleteAnwser } from "../components/ModalDeleteAnwser";
import { ModalClosedAtRoom } from "../components/ModalClosedAtRoom";
import { NoQuestions } from "./../components/NoQuestionsMessage";
import { Question } from "./../components/Question";
import { Spinner } from "../components/Spinner";
import { SwitchButton } from "../components/SwitchButton";
// Icons //
import DeleteIcon from '../assets/delete.svg'
import CheckIcon from '../assets/check.svg'
import AnswerIcon from '../assets/answer.svg'
import { FiSun, FiMoon, FiLogOut } from 'react-icons/fi'

import {RoomContainer, Header as HeaderRoom, ActionsButtons} from '../styles/room' // SCSS //

type CodeProps = {
    id: string
}

export function AdminRoom() {
    const { id } = useParams<CodeProps>()
    const { push } = useHistory()
    const { user } = useAuth()
    const { questions, title, isLoading } = useRoom(id)
    const { themeMode, toggleThemes } = useTheme()

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
        <RoomContainer>
            <Header admin closeRoom={() => openModalForClosedAtRoom()} />

            <main>
                <HeaderRoom>
                    <h2>{title}</h2>
                    {questions.length > 0 && <span>{questions.length} - pergunta(s)</span>}
                </HeaderRoom>

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

            <ActionsButtons>
                <SwitchButton handleOnClick={toggleThemes}>
                    {
                        themeMode === 'light' ? <FiSun size='24' color='#FFF' /> : <FiMoon size='24' color='#FFF' />
                    }
                </SwitchButton>

                {
                    user &&
                    (
                        <button className='danger-button' type='button' onClick={() => push('/admin/home')}>
                            <FiLogOut size='24' />
                        </button>
                    )
                }
            </ActionsButtons>

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
        </RoomContainer>
    )
}
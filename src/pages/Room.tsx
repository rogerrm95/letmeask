import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../services/firebase";
import toast, { Toaster } from "react-hot-toast";
// hooks //
import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../hooks/useRoom";
// Components //
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { NoQuestions } from "./../components/NoQuestionsMessage";
import { Question } from "./../components/Question";

import { FiLogOut } from 'react-icons/fi' // Icon //

import '../styles/room.scss' // CSS //

type RoomCodeProps = {
    id: string
}

export function Room() {
    const { id } = useParams<RoomCodeProps>()
    const { user, signOutWithGoogle, signInWithGoogle } = useAuth()
    const { title, questions } = useRoom(id)

    const [newQuestion, setNewQuestion] = useState('')


    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault()

        try {
            if (newQuestion.trim() === '') {
                toast.error('Informe sua pergunta !')
                return
            }

            const questionData = {
                content: newQuestion,
                author: {
                    name: user?.name,
                    avatar: user?.avatar
                },
                isHighLigted: false,
                isAnswered: false
            }

            await database.ref(`rooms/${id}/questions`).push(questionData)
            toast.success("Pergunta enviada com sucesso")
        }
        catch (error) {
            toast.error(error)
        }
        finally {
            setNewQuestion('')
        }
    }

    async function handleLikeQuestion(questionId: string, likeId: string | undefined) {

        if (likeId) {
            await database.ref(`rooms/${id}/questions/${questionId}/likes/${likeId}`).remove()
        } else {
            await database.ref(`rooms/${id}/questions/${questionId}/likes`).push({
                authorId: user?.id,
            })
        }
    }

    return (
        <div className='page-admin-room'>
            <Header admin={false} />

            <main>
                <div className='admin-room-head'>
                    <h2>{title}</h2>
                    {questions.length > 0 && <span>{questions.length} - Pergunta(s)</span>}
                </div>

                <form action="submit" className="admin-room-content">
                    <textarea
                        name="question"
                        id="question"
                        placeholder="O quê você gostaria de perguntar ?"
                        rows={5}
                        value={newQuestion}
                        onChange={(event) => setNewQuestion(event.target.value)} />

                    <footer>
                        {
                            user ?
                                (
                                    <div className='room-user-info'>
                                        <img src={user.avatar} alt={`Foto do ${user.id}`} />
                                        <span>{user.name}</span>
                                    </div>
                                ) :
                                (
                                    <span>Para enviar uma pergunta,
                                        <button type='button' onClick={signInWithGoogle}>faça seu login.</button>
                                    </span>
                                )
                        }

                        <Button type='submit' disabled={!user} onClick={event => handleSendQuestion(event)}>
                            Enviar pergunta
                        </Button>
                    </footer>
                </form>

                {
                    questions.length > 0 ?
                        (
                            <ul>
                                {questions.map(question => {
                                    return (
                                        <Question
                                            key={question.id}
                                            author={question.author}
                                            content={question.content}
                                            isAnswered={question.isAnswered}
                                            isHighLighted={question.isHighLighted}>
                                            {!question.isAnswered && (
                                                <button
                                                    className={`like-button ${question.likeId ? 'liked' : ''}`}
                                                    type='button'
                                                    onClick={() => handleLikeQuestion(question.id, question.likeId)}>

                                                    {question.likeCount > 0 && <span>{question.likeCount}</span>}

                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            )}
                                        </Question>
                                    )
                                })}
                            </ul>
                        )
                        :
                        (<NoQuestions />)
                }
            </main>

            {
                user && (
                    <button className='button-logout' type='button' onClick={signOutWithGoogle}>
                        <FiLogOut size='20' />
                    </button>
                )
            }

            <Toaster position='top-center' />
        </div>
    )
}
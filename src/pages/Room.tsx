import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { database } from "../services/firebase";
import toast, { Toaster } from "react-hot-toast";
// Components //
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { NoQuestions } from "../components/NoQuestions";
import {Questions} from "../components/Questions";

import { useAuth } from "../hooks/useAuth"; // hook //
import '../styles/room.scss' // CSS //

type RoomCodeProps = {
    id: string
}

type FirebaseQuestions = Record<string, {
    author: {
        name: string,
        avatar: string
    },
    content: string,
    isAnswered: boolean,
    isHighlighted: boolean
}>

type Question = {
    id: string,
    author: {
        name: string,
        avatar: string
    },
    content: string,
    isAnswered: boolean,
    isHighlighted: boolean
}

export function Room() {
    const { user } = useAuth()
    const { id } = useParams<RoomCodeProps>()

    const [newQuestion, setNewQuestion] = useState('')
    const [title, setTitle] = useState('')
    const [questions, setQuestions] = useState<Question[]>([])

    useEffect(() => {
        const roomRef = database.ref(`rooms/${id}`)

        roomRef.on('value', room => {
            const databaseRoom = room.val()
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {}

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isAnswered: value.isAnswered,
                    isHighlighted: value.isHighlighted
                }
            })

            setTitle(databaseRoom.title)
            setQuestions(parsedQuestions)

        })
    }, [id])

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

    return (
        <div className='page-admin-room'>
            <Header />

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
                                    <span>Para enviar uma pergunta, <button>faça seu login.</button></span>
                                )
                        }

                        <Button type='submit' disabled={!user} onClick={event => handleSendQuestion(event)}>
                            Enviar pergunta
                        </Button>
                    </footer>

                    {questions.length > 0 ? 
                    (<Questions questions={questions} isAdmin={false} />)
                    :
                    (<NoQuestions />)}
                </form>
            </main>

            <Toaster position='top-center' />

        </div>
    )
}
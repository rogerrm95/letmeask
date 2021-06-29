// Components //
import { Header } from "../components/Header";
import { NoQuestions } from "../components/NoQuestions";
import { Questions } from "../components/Questions";

import '../styles/room.scss'

const questions = true

export function AdminRoom() {
    return (
        <div className='page-admin-room'>
            <Header />

            <main>
                <div className='admin-room-head'>
                    <h2>Sala React Q&A</h2>
                    <span>6 perguntas</span>
                </div>

                {
                    questions ? (<ul><Questions /><Questions /></ul>) : <NoQuestions />
                }
            </main>
        </div>
    )
}
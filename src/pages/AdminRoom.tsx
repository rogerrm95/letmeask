// Components //
import { Header } from "../components/Header";
import { NoQuestions } from "../components/NoQuestions";

import '../styles/room.scss'

export function AdminRoom() {
    return (
        <div className='page-admin-room'>
            <Header />

            <main>
                <div className='admin-room-head'>
                    <h2>Sala React Q&A</h2>
                    <span>6 perguntas</span>
                </div>

                <NoQuestions/>
            </main>
        </div>
    )
}
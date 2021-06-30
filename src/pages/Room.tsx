// Components //
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { NoQuestions } from "../components/NoQuestions";

import '../styles/room.scss' // CSS //

export function Room() {
    return (
        <div className='page-admin-room'>
            <Header />

            <main>
                <div className='admin-room-head'>
                    <h2>Sala React Q&amp;A</h2>
                    <span>6 perguntas</span>
                </div>

                <form action="submit" className="admin-room-content">
                    <textarea
                        name="question"
                        id="question"
                        placeholder="O quê você gostaria de perguntar ?"
                        rows={5} />

                    <footer>
                        <span>Para enviar uma pergunta, <a href="/">faça seu login.</a></span>

                        <Button>
                            Entrar
                        </Button>
                    </footer>

                    <NoQuestions />
                </form>
            </main>
        </div>
    )
}
// Componentes //
import { IlustrationAside } from '../components/IlustrationAside'
import { Button } from '../components/Button'

import LetMeAskImage from '../assets/logo.svg' // Icon //
import '../styles/home.scss' // CSS //

export function CreateRoom() {
    return (
        <div id='page-container'>
            <IlustrationAside
                title='Crie salas de Q&amp;A ao vivo'
                description='Tire as dúvidas da sua audiência em tempo-real'
            />

            <main>
                <div className='main-content'>
                    <img src={LetMeAskImage} alt="Logo LetMeAsk" />

                    <h2>Crie uma nova sala</h2>

                    <form action="submit">
                        <input
                            type="text"
                            name='name-room'
                            placeholder='Nome da sala' />

                        <Button label='Criar sala' hasAIcon={false}/>
                    </form>

                    <span>
                        Quer entrar em uma sala já existente?
                        <a href="/">Clique aqui</a>
                    </span>
                </div>
            </main>
        </div>
    )
}
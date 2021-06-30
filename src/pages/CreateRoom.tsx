import { Link } from 'react-router-dom'
// Components //
import { IlustrationAside } from '../components/IlustrationAside'
import { Button } from '../components/Button'

// Icon & Image //
import { FiLogOut } from 'react-icons/fi'
import LetMeAskImage from '../assets/logo.svg'

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

                        <Button>
                            <FiLogOut size='20' />
                            Entrar
                        </Button>
                    </form>

                    <span>
                        Quer entrar em uma sala já existente?
                        <Link to="/">Clique aqui</Link>
                    </span>
                </div>
            </main>
        </div>
    )
}
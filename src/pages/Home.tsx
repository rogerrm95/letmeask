// Images & Icons //
import AskQuestionImage from '../assets/illustration.svg'
import LetMeAskImage from '../assets/logo.svg'
import GoogleIcon from '../assets/google-icon.svg'
import { FiLogIn } from 'react-icons/fi'

import '../styles/home.scss' // CSS //

export function Home() {
    return (
        <div id='page-container'>
            <aside>
                <img src={AskQuestionImage} alt="Imagem de perguntas e respostas" />
                <p>Toda pergunta tem uma resposta.</p>
                <span>Aprenda e compartilhe conhecimento com outras pessoas</span>
            </aside>

            <main>
                <div className='main-content'>
                    <img src={LetMeAskImage} alt="Logo LetMeAsk" />

                    <button className='google-button'>
                        <img src={GoogleIcon} alt="Logo da Google" />
                        <span>Crie sua sala com o Google</span>
                    </button>

                    <span className='custom-divider'>Ou entre em uma sala</span>

                    <form action="submit">
                        <input 
                            type="text"
                            name='code-room'
                            placeholder='Digite o código da sala ...'/>
                        <button className='login-button'>
                            <FiLogIn size='20'/>
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}
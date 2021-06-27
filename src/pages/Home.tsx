// Images & Icons //
import LetMeAskImage from '../assets/logo.svg'
import GoogleIcon from '../assets/google-icon.svg'

// Components //
import { IlustrationAside } from '../components/IlustrationAside'
import { Button } from '../components/Button'

import '../styles/home.scss' // CSS //

export function Home() {
    return (
        <div id='page-container'>

            <IlustrationAside
                title='Toda pergunta tem uma resposta.'
                description='Aprenda e compartilhe conhecimento com outras pessoas'
            />

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
                            placeholder='Digite o código da sala ...' />

                        <Button label='Entrar na sala' />
                    </form>
                </div>
            </main>
        </div>
    )
}
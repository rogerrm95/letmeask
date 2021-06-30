import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth' // Hook //
import { FiLogOut } from 'react-icons/fi' // Icon //
// Images & Icons //
import LetMeAskImage from '../assets/logo.svg'
import GoogleIcon from '../assets/google-icon.svg'
// Components //
import { IlustrationAside } from '../components/IlustrationAside'
import { Button } from '../components/Button'


import '../styles/home.scss' // CSS //

export function Home() {
    const { push } = useHistory()
    const { user, signInWithGoogle } = useAuth()

    async function handleCreateRoom() {
        if(!user){
            await signInWithGoogle()
        }

        push('/rooms/new')
    }
    return (
        <div id='page-container'>

            <IlustrationAside
                title='Toda pergunta tem uma resposta.'
                description='Aprenda e compartilhe conhecimento com outras pessoas'
            />

            <main>
                <div className='main-content'>
                    <img src={LetMeAskImage} alt="Logo LetMeAsk" />

                    <button className='google-button' onClick={handleCreateRoom}>
                        <img src={GoogleIcon} alt="Logo da Google" />
                        Crie sua sala com o Google
                    </button>

                    <span className='custom-divider'>Ou entre em uma sala</span>

                    <form action="submit">
                        <input
                            type="text"
                            name='code-room'
                            placeholder='Digite o código da sala ...' />

                        <Button>
                            <FiLogOut size='20' />
                            Entrar
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
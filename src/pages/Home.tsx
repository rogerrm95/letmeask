import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import ClipboardSpinner from 'react-spinners/ClipLoader'
import { database } from '../services/firebase'
// Hooks //
import { useAuth } from '../hooks/useAuth'
import { useTheme } from '../hooks/useTheme'
// Images & Icons //
import { FiLogOut } from 'react-icons/fi'
import LetMeAskImage from '../assets/logo.svg'
import LetMeAskDarkImage from '../assets/logo-dark.svg'
import GoogleIcon from '../assets/google-icon.svg'
// Components //
import { Button } from '../components/Button'
import { IlustrationAside } from './../components/IlustrationAside'
import { HomeHeader } from '../components/HomeHeader'

import { HomeContainer, ContentBox, GoogleButton, CustomDivider, LogoutButton } from '../styles/home' // CSS //

export function Home() {
    const { push } = useHistory()
    const { themeMode } = useTheme()
    const { user, signInWithGoogle, signOutWithGoogle, isLoading } = useAuth()
    const [code, setCode] = useState('')

    async function handleLoginWithGoogle() {
        if (!user) {
            await signInWithGoogle()
        }
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault()

        if (code.trim() === '') return

        const roomRef = await database.ref(`rooms/${code}`).get()

        if (!roomRef.exists()) {
            toast.error('Erro: Sala inexistente!');
            return
        }

        if (roomRef.val().closedAt) {
            toast.error('Esta sala já foi encerrada');
            return
        }

        push(`/rooms/${roomRef.key}`)
    }

    return (
        <HomeContainer>
            <IlustrationAside
                title='Toda pergunta tem uma resposta.'
                description='Aprenda e compartilhe conhecimento com outras pessoas' />

            <main>
                <HomeHeader redirectTo='/' />

                <ContentBox>
                    <img src={themeMode === 'light' ? LetMeAskImage : LetMeAskDarkImage} alt="Logo LetMeAsk" onClick={() => push('/')} />
                    {
                        !user ?
                            (
                                <>
                                    <GoogleButton
                                        disabled={isLoading ? true : false}
                                        onClick={handleLoginWithGoogle}>
                                        {
                                            isLoading ?
                                                (
                                                    <ClipboardSpinner color='white' />
                                                ) :
                                                (
                                                    <>
                                                        <img src={GoogleIcon} alt="Logo da Google" />
                                                        {user ? 'Criar sala com o Google' : 'Entrar com a conta Google'}
                                                    </>
                                                )
                                        }
                                    </GoogleButton>

                                    <CustomDivider className='custom-divider'>Ou entre em uma sala</CustomDivider>
                                </>
                            )
                            :
                            (
                                <div>
                                    <h2>Olá, {user.name}</h2>
                                </div>
                            )
                    }

                    <form action="submit" onSubmit={(event) => handleJoinRoom(event)}>
                        <input
                            type="text"
                            name='code-room'
                            value={code}
                            onChange={(event) => setCode(event.target.value)}
                            placeholder='Digite o código da sala ...' />

                        <Button>
                            <FiLogOut size='20' />
                            Entrar
                        </Button>
                    </form>

                    {
                        !!user && (
                            <LogoutButton id='logout-button'>
                                <span>
                                    Deseja trocar de conta? <button onClick={signOutWithGoogle}>Clique aqui</button>
                                </span>
                            </LogoutButton>
                        )
                    }
                </ContentBox>
            </main>
            
            <Toaster position='top-center' />
        </HomeContainer>
    )
}
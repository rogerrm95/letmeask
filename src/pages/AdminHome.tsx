import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { database } from '../services/firebase'
import { useHistory } from 'react-router-dom'
import ClipboardSpinner from 'react-spinners/ClipLoader'
// Hook //
import { useAuth } from '../hooks/useAuth'
import { useTheme } from '../hooks/useTheme'
// Images & Icons //
import { FiLogOut } from 'react-icons/fi'
import LetMeAskImage from '../assets/logo.svg'
import LetMeAskDarkImage from '../assets/logo-dark.svg'
import GoogleIcon from '../assets/google-icon.svg'
// Components //
import { Button } from '../components/Button'
import { IlustrationAside } from '../components/IlustrationAside'
import { HomeHeader } from '../components/HomeHeader'

import '../styles/home.scss' // CSS //

export function AdminHome() {
    const { push } = useHistory()
    const { isLoading, user, signInWithGoogle, signOutWithGoogle } = useAuth()
    const [code, setCode] = useState('')
    const { themes } = useTheme()

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        push('/admin/rooms/new')
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

        push(`/admin/rooms/${roomRef.key}`)
    }

    return (
        <div id='page-container'>
            <IlustrationAside
                title='Toda pergunta tem uma resposta.'
                description='Aprenda e compartilhe conhecimento com outras pessoas' />
            <main>
                <HomeHeader redirectTo='/' />

                <section className='content-container'>
                    <img src={themes === 'light' ? LetMeAskImage : LetMeAskDarkImage} alt="Logo LetMeAsk" onClick={() => push('/')} />

                    <button className='google-button' onClick={handleCreateRoom}>
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
                    </button>

                    <span className='custom-divider'>Ou entre em uma sala</span>

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
                            <div id='logout-button'>
                                <span>
                                    Deseja trocar de conta? <button onClick={signOutWithGoogle}>Clique aqui</button>
                                </span>
                            </div>
                        )
                    }
                </section>
            </main>
            <Toaster position='top-center' />
        </div>
    )
}
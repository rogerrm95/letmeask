import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { database } from '../services/firebase'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth' // Hook //
// Images & Icons //
import { FiLogOut } from 'react-icons/fi'
import LetMeAskImage from '../assets/logo.svg'
import GoogleIcon from '../assets/google-icon.svg'
// Components //
import { IlustrationAside } from './../components/IlustrationAside'
import { Button } from '../components/Button'

import '../styles/home.scss' // CSS //

import ClipboardSpinner from 'react-spinners/ClipLoader'

export function Home() {
    const { push } = useHistory()
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
        <div id='page-container'>
            <IlustrationAside
                title='Toda pergunta tem uma resposta.'
                description='Aprenda e compartilhe conhecimento com outras pessoas'
            />

            <main>
                <div className='main-content'>
                    <img src={LetMeAskImage} alt="Logo LetMeAsk" onClick={() => push('/')} />

                    {
                        !user ?
                            (
                                <>
                                    <button
                                        disabled={isLoading ? true : false}
                                        className='google-button'
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
                                    </button>

                                    <span className='custom-divider'>Ou entre em uma sala</span>
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
                </div>

                {
                    user && (
                        <div id='logout-button' onClick={signOutWithGoogle}>
                            <span>
                                Deseja trocar de conta? <button>Clique aqui</button>
                            </span>
                        </div>
                    )
                }
            </main>
            <Toaster position='top-center' />
        </div>
    )
}
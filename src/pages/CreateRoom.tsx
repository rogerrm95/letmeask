import { Link, useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { database } from '../services/firebase'
 // Hook //
import { useAuth } from '../hooks/useAuth'
import { useTheme } from '../hooks/useTheme'
// Components //
import { Button } from '../components/Button'
import { HomeHeader } from '../components/HomeHeader'
import { IlustrationAside } from './../components/IlustrationAside'

// Icon & Image //
import { FiLogOut } from 'react-icons/fi'
import LetMeAskImage from '../assets/logo.svg'
import LetMeAskDarkImage from '../assets/logo-dark.svg'

import {HomeContainer, ContentBox} from '../styles/home' // CSS //

export function CreateRoom() {
    const { user } = useAuth()
    const { push } = useHistory()

    const [newRoom, setNewRoom] = useState('')
    const {themeMode} = useTheme()

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault()

        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms')
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })

        push(`/admin/rooms/${firebaseRoom.key}`)
    }

    return (
        <HomeContainer>
            <IlustrationAside
                title='Crie salas de Q&amp;A ao vivo'
                description='Tire as dúvidas da sua audiência em tempo-real'
            />

            <main>
                <HomeHeader redirectTo='/admin/home'/>

                <ContentBox>
                    <img src={themeMode === 'light' ? LetMeAskImage : LetMeAskDarkImage} alt="Logo LetMeAsk" />

                    <h2>Crie uma nova sala</h2>

                    <form action="submit" onSubmit={(event) => handleCreateRoom(event)}>
                        <input
                            type="text"
                            name='name-room'
                            placeholder='Nome da sala'
                            value={newRoom}
                            onChange={(event) => setNewRoom(event.target.value)} />

                        <Button>
                            <FiLogOut size='20' />
                            Entrar
                        </Button>
                    </form>

                    <span>
                        Quer entrar em uma sala já existente?
                        <Link to="/admin/home">Clique aqui</Link>
                    </span>
                </ContentBox>               
            </main>
        </HomeContainer>
    )
}

// #6F4BD8 ; #e559f9
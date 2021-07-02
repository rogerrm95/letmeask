import { Link, useHistory } from 'react-router-dom'
// Components //
import { IlustrationAside } from '../components/IlustrationAside'
import { Button } from '../components/Button'

// Icon & Image //
import { FiLogOut } from 'react-icons/fi'
import LetMeAskImage from '../assets/logo.svg'

import '../styles/home.scss' // CSS //
import { useAuth } from '../hooks/useAuth'
import { FormEvent, useState } from 'react'
import { database } from '../services/firebase'

export function CreateRoom() {

    const { user } = useAuth()
    const { push } = useHistory()

    const [newRoom, setNewRoom] = useState('')

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
        <div id='page-container'>
            <IlustrationAside
                title='Crie salas de Q&amp;A ao vivo'
                description='Tire as dúvidas da sua audiência em tempo-real'
            />

            <main>
                <div className='main-content'>
                    <img src={LetMeAskImage} alt="Logo LetMeAsk" />

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
                        <Link to="/">Clique aqui</Link>
                    </span>
                </div>
            </main>
        </div>
    )
}
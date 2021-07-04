import { Clipboard } from '../components/Clipboard' // Component //
import LogoImage from '../assets/logo.svg' // Image //
import '../styles/components/header.scss' // CSS //
import { useParams } from 'react-router-dom'

type CodeParams = {
    id: string
}

export function Header() {

    const { id }= useParams<CodeParams>()
    const roomCode = id

    return (
        <header className='page-header'>
            <div className="content">
                <img src={LogoImage} alt="Logo LetMeAsk" />

                <div>
                    <Clipboard code={roomCode} />

                    <button>
                        Encerrar Sala
                    </button>
                </div>
            </div>
        </header>
    )
}
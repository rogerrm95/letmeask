import { useParams } from 'react-router-dom'

import { Clipboard } from '../Clipboard' // Component //
import LogoImage from '../../assets/logo.svg' // Image //
import './styles.scss' // CSS //

type HeaderProps = {
    admin: boolean
}

type CodeParams = {
    id: string
}

export function Header({ admin }: HeaderProps) {

    const { id } = useParams<CodeParams>()
    const roomCode = id

    return (
        <header className='page-header'>
            <div className="content">
                <img src={LogoImage} alt="Logo LetMeAsk" />

                <div>
                    <Clipboard code={roomCode} />

                    {admin && <button className='close-room-button'>Encerrar Sala</button>}
                </div>
            </div>
        </header>
    )
}
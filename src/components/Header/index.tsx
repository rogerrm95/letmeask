import { useParams, Link } from 'react-router-dom'

import { Clipboard } from '../Clipboard' // Component //
import LogoImage from '../../assets/logo.svg' // Image //
import './styles.scss' // CSS //

type HeaderProps = {
    admin: boolean,
    closeRoom?: () => void
}

type CodeParams = {
    id: string
}

export function Header({ admin, closeRoom }: HeaderProps) {

    const { id } = useParams<CodeParams>()
    const roomCode = id

    return (
        <header className='page-header'>
            <div className="content">
                <Link to='/'>
                    <img src={LogoImage} alt="Logo LetMeAsk"/>
                </Link>

                <div>
                    <Clipboard code={roomCode} />

                    {admin && <button className='close-room-button' onClick={closeRoom}>Encerrar Sala</button>}
                </div>
            </div>
        </header>
    )
}
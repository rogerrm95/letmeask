import { useParams, Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme' // Hook //
import { Clipboard } from '../Clipboard' // Component //
// Image //
import LetMeAskImage from '../../assets/logo.svg'
import LetMeAskImageDark from '../../assets/logo-dark.svg'

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
    const { themes } = useTheme()

    const roomCode = id

    return (
        <header className='page-header'>
            <div className="content">
                <Link to='/'>
                    <img src={themes === 'light' ? LetMeAskImage : LetMeAskImageDark} alt="Logo LetMeAsk" />
                </Link>

                <div>
                    <Clipboard code={roomCode} />
                    {admin && <button className='close-room-button' onClick={closeRoom}>
                        Encerrar Sala
                    </button>
                    }
                </div>
            </div>
        </header>
    )
}
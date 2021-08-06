import { useParams, Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme' // Hook //
import { Clipboard } from '../Clipboard' // Component //
// Image //
import LetMeAskImage from '../../assets/logo.svg'
import LetMeAskImageDark from '../../assets/logo-dark.svg'

import {HeaderContainer} from './styles' // CSS //

type HeaderProps = {
    admin: boolean,
    closeRoom?: () => void
}

type CodeParams = {
    id: string
}

export function Header({ admin, closeRoom }: HeaderProps) {

    const { id } = useParams<CodeParams>()
    const { themeMode } = useTheme()

    const roomCode = id

    return (
        <HeaderContainer>
            <div className="content">
                <Link to='/'>
                    <img src={themeMode === 'light' ? LetMeAskImage : LetMeAskImageDark} alt="Logo LetMeAsk" />
                </Link>

                <div>
                    <Clipboard code={roomCode} />
                    {admin && <button className='close-room-button' onClick={closeRoom}>
                        Encerrar Sala
                    </button>
                    }
                </div>
            </div>
        </HeaderContainer>
    )
}
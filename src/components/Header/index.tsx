import { useParams, Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme' // Hook //
// Components //
import { Clipboard } from '../Clipboard'
import { SwitchButton } from '../SwitchButton'
// Image & Icons//
import LetMeAskImage from '../../assets/logo.svg'
import LetMeAskImageDark from '../../assets/logo-dark.svg'
import { FiSun, FiMoon } from 'react-icons/fi'

import { HeaderContainer, RightSide, LeftSide } from './styles' // CSS //

type HeaderProps = {
    admin: boolean,
    closeRoom?: () => void
}

type CodeParams = {
    id: string
}

export function Header({ admin, closeRoom }: HeaderProps) {

    const { id } = useParams<CodeParams>()
    const { themeMode, toggleThemes } = useTheme()

    const roomCode = id

    return (
        <HeaderContainer>
            <div>
                <LeftSide as={Link} to='/'>
                    <img src={themeMode === 'light' ? LetMeAskImage : LetMeAskImageDark} alt="Logo LetMeAsk" />
                </LeftSide>

                <RightSide>
                    <SwitchButton handleOnClick={toggleThemes}>
                        {themeMode === 'light' ? <FiSun color='#FFF' size={24} /> : <FiMoon size={24} color='#FFF' />}
                    </SwitchButton>

                    <Clipboard code={roomCode} />

                    {admin && (
                        <button className='close-room-button' onClick={closeRoom}>
                            Encerrar Sala
                        </button>)
                    }
                </RightSide>
            </div>
        </HeaderContainer>
    )
}
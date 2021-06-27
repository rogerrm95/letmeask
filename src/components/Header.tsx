import { Clipboard } from '../components/Clipboard' // Component //
import LogoImage from '../assets/logo.svg' // Image //
import '../styles/components/header.scss' // CSS //

export function Header() {
    return (
        <header className='page-header'>
            <img src={LogoImage} alt="Logo LetMeAsk" />

            <div>
                <Clipboard />

                <button>
                    Encerrar Sala
                </button>
            </div>
        </header>
    )
}
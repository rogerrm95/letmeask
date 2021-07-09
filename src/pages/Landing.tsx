import { Link } from 'react-router-dom'
import HeroImage from '../assets/heroImage.svg'

import '../styles/landing.scss'

export function Landing() {
    return (
        <div id='landing-page'>
            <main className='landing-content'>
                <img src={HeroImage} alt="Imagem de uma garota com dúvida" />

                <div>
                    <h1>
                        O lugar ideal para você retirar suas dúvidas sobre o mundo Front-End 💻
                    </h1>
                    <span>
                        Escolha uma das opções e venha participar de nossa incrível comunidade de Dev’s.
                    </span>

                    <div className='buttons-group'>
                        <Link to='/home'>Perguntar</Link>
                        <Link to='/admin/home'>Criar Sala</Link>
                    </div>
                </div>
            </main>

        </div>
    )
}
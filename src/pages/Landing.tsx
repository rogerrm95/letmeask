import { Link } from 'react-router-dom'
import HeroImage from '../assets/heroImage.svg' // Image //
import {LandingPageContainer, ContentBox, HeroImage as Image, ButtonGroup} from '../styles/landing' // CSS //

export function Landing() {
    return (
        <LandingPageContainer>
            <ContentBox>
                <Image src={HeroImage} alt="Imagem de uma garota com dúvida" />
                <div>
                    <h1>
                        O lugar ideal para você retirar suas dúvidas sobre o mundo Front-End 💻
                    </h1>
                    <span>
                        Escolha uma das opções e venha participar de nossa incrível comunidade de Dev’s.
                    </span>

                    <ButtonGroup>
                        <Link to='/home'>Perguntar</Link>
                        <Link to='/admin/home'>Criar Sala</Link>
                    </ButtonGroup>
                </div>
            </ContentBox>
        </LandingPageContainer>
    )
}
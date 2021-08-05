import AskQuestionImage from '../../assets/illustration.svg' // Image //
import { AsideContainer } from './styles' // CSS //

type IlustrationAsideProps = {
    title: string,
    description: string
}

export function IlustrationAside({ title, description }: IlustrationAsideProps) {
    return (
        <AsideContainer>
            <img src={AskQuestionImage} alt="Imagem de perguntas e respostas" />
            <p>{title}</p>
            <span>{description}</span>
        </AsideContainer>
    )
}
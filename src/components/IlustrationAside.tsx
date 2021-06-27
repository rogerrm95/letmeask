import AskQuestionImage from '../assets/illustration.svg'

import '../styles/components/ilustrationAside.scss'

type IlustrationAsideProps = {
    title: string,
    description: string
}

export function IlustrationAside({ title, description }: IlustrationAsideProps) {
    return (
        <aside>
            <img src={AskQuestionImage} alt="Imagem de perguntas e respostas" />
            <p>{title}</p>
            <span>{description}</span>
        </aside>
    )
}
import AskQuestionImage from '../../assets/illustration.svg' // Image //
import './styles.scss' // CSS //

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
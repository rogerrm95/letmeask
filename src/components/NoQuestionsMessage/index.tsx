import commentsImage from '../../assets/empty-questions.svg' // Image //
import { NoQuestionsContainer } from './styles' // CSS //

export function NoQuestions() {
    return (
        <NoQuestionsContainer>
            <img src={commentsImage} alt="Balões de comentários" />
            <p>Nenhuma pergunta por aqui...</p>
            <span>
                Envie o código desta sala para seus amigos e comece a responder perguntas!
            </span>
        </NoQuestionsContainer>
    )
}
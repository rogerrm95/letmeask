import { FiTrash, FiCheck, FiMessageSquare, FiThumbsUp } from 'react-icons/fi' // Icon //
import './styles.scss' // CSS //

type QuestionsProps = {
    isAdmin: boolean,
    questions: Question[]
}

type Question = {
    id: string,
    author: {
        name: string,
        avatar: string
    },
    content: string,
    isAnswered: boolean,
    isHighlighted: boolean
}

export function Questions(props: QuestionsProps) {
    return (
        <ul>
            {
                props.questions.map(question => {
                    return (
                        <li className='question-item' key={question.id}>
                            <p>{question.content}</p>

                            <footer>
                                <div className='user-info'>
                                    <img src={question.author.avatar} alt={`Foto do ${question.author.name}`} />
                                    <span>{question.author.name}</span>
                                </div>

                                <div className='actions-group'>
                                    {props.isAdmin && <FiCheck size='24' />}
                                    {props.isAdmin && <FiMessageSquare size='24' />}
                                    {props.isAdmin && <FiTrash className='delete' size='24' />}

                                    {!props.isAdmin && <FiThumbsUp size='24' />}
                                </div>
                            </footer>
                        </li>
                    )
                })
            }
        </ul>
    )
}
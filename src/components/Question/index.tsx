import { ReactNode } from 'react'

import './styles.scss' // CSS //

type QuestionProps = {
    author: {
        name: string,
        avatar: string
    },
    content: string,
    isAnswered?: boolean,
    isHighlighted?: boolean,
    children: ReactNode
}

export function Question(props: QuestionProps) {
    return (
        <li className='question-item'>
            <p>{props.content}</p>

            <footer>
                <div className='user-info'>
                    <img src={props.author.avatar} alt={`Foto do ${props.author.name}`} />
                    <span>{props.author.name}</span>
                </div>

                <div className='actions-group'>
                    {props.children}
                </div>
            </footer>
        </li>
    )
}
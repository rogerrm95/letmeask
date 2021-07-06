import { ReactNode } from 'react'
import cx from 'classnames'

import './styles.scss' // CSS //

type QuestionProps = {
    author: {
        name: string,
        avatar: string
    },
    content: string,
    isAnswered?: boolean,
    isHighLighted?: boolean,
    children: ReactNode
}

export function Question({ author, content, isAnswered = false, isHighLighted = false, children }: QuestionProps) {
    return (
        <li
            className={cx('question-item', { answered: isAnswered }, { highlighted: isHighLighted && !isAnswered })}>

            <p>{content}</p>

            <footer>
                <div className='user-info'>
                    <img src={author.avatar} alt={`Foto do ${author.name}`} />
                    <span>{author.name}</span>
                </div>

                <div className='actions-group'>
                    {children}
                </div>
            </footer>
        </li>
    )
}
import { ReactNode } from 'react'
import { QuestionContainer, UserInfo } from './styles' // CSS //

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

// className={cx({ answered: isAnswered }, { highlighted: isHighLighted && !isAnswered })}

export function Question({ author, content, isAnswered = false, isHighLighted = false, children }: QuestionProps) {
    return (
        <QuestionContainer isHighLighted={isHighLighted && !isAnswered } isAnswered={isAnswered}>

            <p>{content}</p>

            <footer>
                <UserInfo>
                    <img src={author.avatar} alt={`Foto do ${author.name}`} />
                    <span>{author.name}</span>
                </UserInfo>

                <div className='actions-group'>
                    {children}
                </div>
            </footer>
        </QuestionContainer>
    )
}
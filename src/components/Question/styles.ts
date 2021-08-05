import styled from 'styled-components'

interface QuestionProps {
    isHighLighted: boolean,
    isAnswered: boolean
}

export const QuestionContainer = styled.li<QuestionProps>`
    background: ${props => props.isAnswered ?
        props.theme.colors.disable :
        (props.isHighLighted ?
            props.theme.colors.backgroundSelected :
            props.theme.colors.acent)
    };
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    height: 9.75rem;
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // Incompatível com o Explorer //
    p {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.5rem;
        text-align: justify;
        color: ${props => props.theme.colors.primaryText};
    }

    footer {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        > div {
            display: flex;
            gap: 1rem;
        }

        button {
            border: 0;
            background-color: transparent;
            cursor: pointer;

            transition: filter 0.2s;

            &.like-button {
                display: flex;
                align-items: flex-end;
                color: ${props => props.theme.colors.iconPrimary};
                gap: 0.5rem;

                &.liked {
                    color: #835afd;
                    font-weight: 500;

                    svg path {
                        stroke: #835afd; // or fill (preenchido)
                    }
                }
            }

            &:hover {
                filter: brightness(0.8);
            }
        }
    }

    &:not(:first-child) {
    margin-top: 0.5rem;
    }

    &:last-child {
    margin-bottom: 2rem;
    }

    // Media Queries //
    @media (max-width: 1000px) {
        & {
        max-width: 93.75%;
        }
    }

    @media (max-width: 800px) {
        & {
        max-width: 93%;
        }
    }

    @media (max-width: 600px) {
        & {
        max-width: 100%;
        }
    }
`
export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > img {
        height: 32px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        font-family: Roboto, sans-serif;
        font-size: 0.75rem;
        color: ${props => props.theme.colors.primaryText};
    }

    // Media Queries //
    @media (max-width: 1000px) {
        & {
        span {
            font-size: 1rem;
            }
        }
    }
`

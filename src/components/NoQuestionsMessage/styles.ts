import styled from 'styled-components'

export const NoQuestionsContainer = styled.div`
    align-self: center;
    justify-self: center;
    margin: 4rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin-bottom: 1rem;
    }

    p {
        font-family: Poppins, sans-serif;
        font-weight: 700;
        color: ${props => props.theme.colors.primaryText};
    }

    span {
        color: ${props => props.theme.colors.legend};
        max-width: 250px;
        font-size: 0.75rem;
        text-align: center;
        margin-top: 0.5rem;
        line-height: 1rem;
    }
`
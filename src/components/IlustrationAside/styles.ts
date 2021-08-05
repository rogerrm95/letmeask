import styled from 'styled-components'

export const AsideContainer = styled.aside`
    flex: 7;
    background: ${props => props.theme.colors.primaryDark};
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 7rem 5rem;

    img {
        max-width: 20rem;
        margin-bottom: 1rem;
    }

    p {
        font: 700 2rem "Poppins", sans-serif;
        max-width: 75%;
        margin-bottom: 1rem;
        line-height: 42px;
    }

    span {
        font-size: 1.5rem;
        max-width: 90%;
        line-height: 32px;
        color: #f8f8f8;
        opacity: 0.8;
    }

    // Media Queries //
    @media (max-width: 1150px) {
        & {
            p {
                max-width: 100%;
            }

            span {
                max-width: 100%;
            }
        }
    }
`
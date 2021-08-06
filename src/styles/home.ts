import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: stretch;

    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primaryText};

    aside {
        flex: 7;
    }

    main {
        flex: 8;
        padding: 0 0.5rem;

        display: flex;
        flex-direction: column;
    }

    @media (min-width: 1440px) {
    & {
        max-width: 1440px;
        margin: auto;
    }
    }

    @media (max-width: 700px) {
    & {
        aside {
            display: none;
            }

        main {
            flex: 1;
            }
        }
    }

    @media (min-width: 1440px) {
        & {
        max-width: none;
        }
    }
`

export const ContentBox = styled.section`
    width: 100%;
    flex: 1;
    max-width: 20rem;
    align-self: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    text-align: center;

    > img {
        align-self: center;
        cursor: pointer;
    }

    > h2 {
        margin: 3.5rem 0 1.5rem;
        font-family: "Poppins", sans-serif;
    }

    form {
        input {
            height: 3rem;
            border-radius: 0.5rem;
            padding: 0 1rem;
            color: ${props => props.theme.colors.primaryText};
            background: ${props => props.theme.colors.acent};
            border: 1px solid ${props => props.theme.colors.primaryBorder};
            margin-bottom: 1rem;

            &::placeholder {
                color: ${props => props.theme.colors.inputBorder};
            }

            &:focus{
                border: 2px solid ${props => props.theme.colors.primary};
                outline: none;
            }
        }

        button,
        input {
            width: 100%;
        }
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;

        h2 {
            text-align: right;
        }
    }

    > span {
        font-size: 0.75rem;
        margin-top: 1rem;
        color: ${props => props.theme.colors.secundaryText};

        a {
            color: ${props => props.theme.colors.secundary};
            margin-left: 0.5rem;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }
`

export const GoogleButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 4rem;
    height: 3rem;
    border-radius: 0.5rem;

    font-weight: 500;
    color: #fff;
    background-color: #ea4335;

    border: none;
    cursor: pointer;

    transition: filter 0.2s;

    img {
        margin-right: 0.5rem;
    }

    &:hover {
        filter: brightness(0.9);
    }

    @media (max-width: 850px) {
    & {
        font-size: 0.75rem;
        } 
    }

    @media (max-width: 700px) {
    & {
            font-size: 1rem;
    }
}
`

export const CustomDivider = styled.span`
    color: #a8a8b3;
    font-size: 0.75rem;
    margin: 2rem 0rem;

    display: flex;
    align-items: center;

    &::before {
        content: "";
        flex: 1;
        height: 1px;
        background-color: #a8a8b3;
        margin-right: 1rem;
    }

    &::after {
        content: "";
        flex: 1;
        height: 1px;
        background-color: #a8a8b3;
        margin-left: 1rem;
    }
`

export const LogoutButton = styled.div`
    margin-top: 1.5rem;

    span {
        font-size: 0.75rem;
        color: #737380;

        button {
            border: none;
            background-color: transparent;
            cursor: pointer;

            color: #e559f9;
            text-decoration: underline;
            font-size: 0.75rem;
        }
    }

    @media (max-width: 700px) {
        & {
            span {
                font-size: 1rem;

            button {
                font-size: inherit;
            }
            }
        }
    }
`
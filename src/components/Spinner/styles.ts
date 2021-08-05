import styled from 'styled-components'

export const SpinnerContainer = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme.colors.background};

    h2 {
        margin-top: 1rem;
        color: ${props => props.theme.colors.primaryText};

        font-weight: 700;
        font-size: 2rem;
        font-family: "Poppins", sans-serif;
        -webkit-font-smoothing: antialiased;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    }
`

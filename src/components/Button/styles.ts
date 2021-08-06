import styled from 'styled-components'

export const ButtonContainer = styled.button`
    background-color: #835afd;
    color: #fff;
    height: 3rem;
    border-radius: 0.5rem;
    padding: 0 2rem;

    border: 0;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    svg {
        margin-right: 0.5rem;
    }

    &:not(:disabled):hover {
        filter: brightness(0.9);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
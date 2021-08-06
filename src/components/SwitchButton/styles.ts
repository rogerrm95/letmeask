import styled from 'styled-components'

export const SwitchButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    cursor: pointer;
    background-color: ${props => props.theme.colors.primary};

    padding: 0.75rem;
    border-radius: 50%;

    transition: filter 0.4s, border 0.3s;

    &:hover {
        filter: brightness(0.85);
        border: 1px solid ${props => props.theme.colors.primaryBorder};
    }
`

import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.75rem;

    position: relative;

    a > svg {
        display: flex;
        align-items: center;

        cursor: pointer;
        transition: filter 0.5s, padding 0.2s;

        &:hover{
            filter: brightness(0.8);
            padding: 0.1rem;
        }
    }
`


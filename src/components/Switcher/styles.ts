import styled from "styled-components";

export const SwitcherContainer = styled.div`
    position: absolute;
    left: 50%;
    right: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    .switch-button {
        margin: 0 1rem;
    }

    .disabled {
        opacity: 0.2;
    }
`
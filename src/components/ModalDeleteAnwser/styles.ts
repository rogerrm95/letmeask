import styled from 'styled-components'

export const ModalContainer = styled.div`
    height: 100%;
    width: 100%;
    background: ${props => props.theme.colors.acent};

    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: ${props => props.theme.colors.primaryText};
        font-family: "Poppins", sans-serif;
        font-size: 1.5rem;
        text-align: center;
        margin: 1rem 0;
    }

    span {
        color: ${props => props.theme.colors.secundaryText};
        font-weight: 400;
        text-align: center;
        margin-bottom: 2.5rem;
    }

    .modal-button-group {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        max-width: 20rem;
        width: 100%;

        button {
            width: 100%;

            border: none;
            cursor: pointer;
            height: 3rem;
            border-radius: 0.5rem;

            transition: filter 0.3s;

            &:hover {
                filter: brightness(0.9);
            }
        }

        #button-cancel {
            color: #737380;
            background-color: #dbdcdd;
        }

        #button-delete {
            color: #fff;
            background-color: #e73f5d;
        }
    }
`
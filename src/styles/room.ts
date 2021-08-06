import styled from 'styled-components'

export const RoomContainer = styled.div`
    height: inherit;
    background: ${props => props.theme.colors.background};
    overflow-y: scroll;

    main {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        ul {
            width: 100%;
        }
    }
    
    // Media Queries //
    @media (max-width: 825px) {
        main {
            align-items: center;
            max-width: 90%;
        }
    }

    @media (max-width: 700px) {
        main {
            max-width: 80%;
        }
    }
`

export const Header = styled.div`
    margin: 2rem 0 1.5rem;
    display: flex;
    align-items: center;

    h2 {
        font-family: Poppins, sans-serif;
        color: ${props => props.theme.colors.primaryText};
    }

    span {
        background-color: #e559f9;
        color: #f8f8f8;
        font-size: 0.75rem;
        margin-left: 1rem;

        padding: 0.5rem 1rem;
        border-radius: 9999px;
    }
`
export const FormActions = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    textarea {
        width: 100%;
        min-height: 130px;
        border: 0;
        resize: vertical;
        border-radius: 0.5rem;
        padding: 1rem;

        color: ${props => props.theme.colors.primaryText};
        background:${props => props.theme.colors.acent};
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

        &::placeholder {
            color: ${props => props.theme.colors.inputBorder};
        }

        &:focus{
            border: 2px solid ${props => props.theme.colors.primary};
            outline: none;
        }
    }
`

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.5rem 0;

    > span {
        font-size: 0.75rem;
        color: ${props => props.theme.colors.legend};

        button {
            color: #835afd;
            border: none;
            background: transparent;
            font-family: inherit;
            font-size: inherit;
            cursor: pointer;
            margin-left: 0.25rem;
        }
    }

    .room-user-info {
        display: flex;
        align-items: center;
        padding-left: 0.25rem;

        img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            margin-right: 0.5rem;
        }

        > span {
            font-weight: 500;
            font-size: 0.85rem;
            color: ${props => props.theme.colors.legend};
        }
    }
`

export const ActionsButtons = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    position: fixed;
    bottom: 2%;
    right: 2rem;
    z-index: 2;

    .danger-button {
        border: 0;
        cursor: pointer;
        background-color: #ea4335;
        color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.75rem;
        border-radius: 50%;

        transition: filter 0.3s;
        
        &:hover {
            filter: brightness(0.85);
            border: solid 2px #ea4335
        }
    }

    @media (max-width: 600px) {
        & {
            display: none;
        }
    }
`
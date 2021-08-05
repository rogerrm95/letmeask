import styled from 'styled-components'

export const ClipboardContainer = styled.button`
    background-color: ${props => props.theme.colors.background};

    div {
        background-color: ${props => props.theme.colors.primary};
        padding: 0 0.75rem;

        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 25px;
        }
    }

    span {
        display: block;
        align-self: center;
        flex: 1;
        padding: 0 1rem 0 0.75rem;
        width: 15rem;
        color: ${props => props.theme.colors.primaryText};
        font-size: 0.85rem;
        font-weight: 500;
    }

    // Media Queries //
    @media (max-width: 600px) {
        & {
            span {
                display: none;
            }
        }
    }
`
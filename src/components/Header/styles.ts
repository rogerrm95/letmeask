import styled from 'styled-components'

export const HeaderContainer = styled.header`
    padding: 1.5rem;
    border-bottom: 1px solid #e2e2e2;

    .content {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        a > img {
            max-height: 45px;
            cursor: pointer;
        }

        > div {
            display: flex;
            flex-direction: row;
            justify-items: center;
            align-content: center;
            gap: 1rem;
            
            button {
                height: 3rem;
                border-radius: 0.5rem;
                border: 1px solid ${props => props.theme.colors.primaryBorder};
                cursor: pointer;
                overflow: hidden;

                display: flex;
                align-items: center;
                justify-content: center;
            }

            .close-room-button {
                background-color: ${props => props.theme.colors.background};
                color: ${props => props.theme.colors.primary};
                padding: 0 12px;

                transition: background-color 0.5s, color 0.4s;

                &:hover {
                    background-color: ${props => props.theme.colors.primary};
                    color: #fff;
                }
            }
        }
    }
`
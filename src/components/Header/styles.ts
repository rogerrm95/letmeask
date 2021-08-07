import styled from 'styled-components'

export const HeaderContainer = styled.header`
    padding: 1.5rem;
    border-bottom: 1px solid #e2e2e2;

    > div {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const LeftSide = styled.a`
    img {
        max-height: 45px;
        cursor: pointer;
    }
`

export const RightSide = styled.div`
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-content: center;
        gap: 1rem;
        
        button {
            height: 3rem;
            max-height: 45px;
            border-radius: 0.5rem;
            border: 1px solid ${props => props.theme.colors.primary};
            cursor: pointer;
            overflow: hidden;

            display: flex;
            align-items: center;
            justify-content: center;

            &:first-child {
                display: none;
            }
        }

        .close-room-button {
            background-color: ${props => props.theme.colors.primary};
            color: #FFF;
            padding: 0 12px;

            transition: filter 0.5s, color 0.4s;

            &:hover {
                filter: brightness(0.8)
            }
        }

        // media queries //
        @media(max-width: 600px){
            button:first-child{
                display: flex;
            }
        }
`
import styled from 'styled-components'

export const LandingPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(131,90,253);
    background: linear-gradient(180deg, rgba(131,90,253,1) 0%, rgba(98,57,219,1) 100%);
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContentBox = styled.main`
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 2rem;
        padding-left: 3rem;

        h1 {
            text-align: right;
            font-family: "Poppins", sans-serif;
            font-size: 3rem;
            font-weight: bold;
            line-height: 4rem;
        }

        span {
            max-width: 80%;
            font-size: 1.25rem;
            font-weight: 400;
            text-align: right;
            line-height: 2rem;

            color: #f8f8f8;
            opacity: 0.8;
            margin: 1.5rem 0;
        }
    }

    // Media Queries //
    @media (max-width: 1000px) {
        h1 {
            font-size: 2.5rem;
        }

        span {
            max-width: 80%;
            font-size: 1.25rem;
        }
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    @media (max-width: 400px) {
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            margin-right: 1rem;
            padding-left: 0;

            h1,
            span {
                text-align: center;
            }
        }
    }
`

export const HeroImage = styled.img`
    width: 30rem;
    height: auto;
    filter: drop-shadow(2px 6px 16px rgba(0,0,0,0.25));

    // Media Queries //
    @media (max-width: 1000px) {
        & {
            width: 22rem;
        }
    }

    @media (max-width: 800px) {
        & {
            width: 30rem;
        }
    }

    @media (max-width: 600px) {
        & {
            width: 24rem;
        }
    }

    @media (max-width: 325px) {
        & {
            display: none;
        }
    }

    @media (min-width: 1440px) {
        & {
            width: 50rem;
        }
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    max-width: 80%;

    a {
        width: 12rem;
        height: 3rem;
        border-radius: 0.5rem;
        cursor: pointer;
        text-decoration: none;
        color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: filter 0.3s;

        &:first-child {
            background-color: #e559f9;
        }
        &:last-child {
            background-color: #3f3d56;
        }

        &:hover {
            filter: brightness(0.8);
        }
    }
`
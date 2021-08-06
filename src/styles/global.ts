import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
}

#root {
    height: inherit;
}

@media (max-width: 1100px) {
    html {
        font-size: 93.75%; // 15px
    }
}

@media (max-width: 760px) {
    html {
        font-size: 87.5%; // 14px
    }
}

@media (max-width: 540px) {
    html {
        font-size: 81.25%; // 13px
    }
}

body, input, button, textarea {
    font: 400 1rem Roboto, sans-serif;
}

.Modal {
    max-width: 800px;
    position: absolute;
    top: 25%;
    left: 25%;
    right: 25%;
    bottom: 25%;

    // Media Queries //
    @media (max-width: 600px) {
        & {
            top: 15%;
            left: 10%;
            right: 10%;
            bottom: 15%;
            gap: 1rem;

            h1 {
                font-size: 2rem;
            }
        }
    }
}

.Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #05020680;
    z-index: 2;
}
`
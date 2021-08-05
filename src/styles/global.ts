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

`
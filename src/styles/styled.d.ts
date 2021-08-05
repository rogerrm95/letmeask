import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            primaryDark: string,
            secundary: string,

            background: string,
            backgroundSelected: string,
            acent: string,

            primaryText: string,
            secundaryText: string,

            primaryBorder: string,
            secundaryBorder: string,

            textSelected: string,
            legend: string,

            iconPrimary: string,
            inputBorder: string,
            disable: string,
        }
    }
}
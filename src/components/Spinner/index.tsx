import SpinnerLoading from 'react-spinners/ClipLoader'
import { LoaderSizeProps } from 'react-spinners/interfaces'

import { SpinnerContainer } from './styles' // CSS //

type SpinnerProps = LoaderSizeProps

export function Spinner(props: SpinnerProps) {
    return (
        <SpinnerContainer>
            <SpinnerLoading {...props} />
            <h2>Carregando...</h2>
        </SpinnerContainer>
    )
}
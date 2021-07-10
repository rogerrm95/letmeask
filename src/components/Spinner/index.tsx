import SpinnerLoading from 'react-spinners/ClipLoader'
import { LoaderSizeProps } from 'react-spinners/interfaces'

import './styles.scss'

type SpinnerProps = LoaderSizeProps

export function Spinner(props: SpinnerProps) {
    return (
        <div id='spinner-container'>
            <SpinnerLoading {...props} />
        </div>
    )
}
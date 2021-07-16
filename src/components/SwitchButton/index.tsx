import { ReactNode } from 'react'

import './styles.scss' // CSS //

type SwitchButtonProps = {
    children: ReactNode,
    handleOnClick?: () => void
}

export function SwitchButton({ handleOnClick, children }: SwitchButtonProps) {
    return (
        <button
            id='switch-button-container'
            type='button'
            onClick={handleOnClick}>

                {
                    children
                }

        </button>
    )
}
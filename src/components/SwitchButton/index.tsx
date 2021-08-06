import { ReactNode } from 'react'
import { SwitchButtonContainer } from './styles'

type SwitchButtonProps = {
    children: ReactNode,
    handleOnClick?: () => void
}

export function SwitchButton({ handleOnClick, children }: SwitchButtonProps) {
    return (
        <SwitchButtonContainer
            type='button'
            onClick={handleOnClick}>
                {
                    children
                }
        </SwitchButtonContainer>
    )
}
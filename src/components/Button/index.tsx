import { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from './styles' // CSS //

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
    return (
        <ButtonContainer className='button-custom' {...props} />
    )
}
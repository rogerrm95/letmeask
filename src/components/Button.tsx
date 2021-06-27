import { HTMLAttributes } from "react";

import { FiLogIn } from 'react-icons/fi'
import '../styles/components/button.scss'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    label: string,
    hasAIcon?: boolean
}

export function Button({ label, hasAIcon = true, ...rest }: ButtonProps) {
    return (
        <button name={label} className='button-custom' {...rest}>
            {hasAIcon && <FiLogIn size='20' />}
            {label}
        </button>
    )
}
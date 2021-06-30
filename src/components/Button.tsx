import { ButtonHTMLAttributes } from "react";

import { FiLogIn } from 'react-icons/fi'
import '../styles/components/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
    return (
        <button className='button-custom' {...props} />
    )
}
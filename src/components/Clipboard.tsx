import { HTMLAttributes } from 'react'

import copyImage from '../assets/copy.svg' // Icon //
import '../styles/components/clipboard.scss' // CSS //

interface ClipboardProps extends HTMLAttributes<HTMLButtonElement> {
    code: string 
}

export function Clipboard({ code , ...rest }: ClipboardProps) {

    function copyRoomCodeToClipboard() {
        code && navigator.clipboard.writeText(code)
    }

    return (
        <button className='clipboard' {...rest} onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImage} alt="Copiar código" />
            </div>
            <span>Código {code}</span>
        </button>
    )
}
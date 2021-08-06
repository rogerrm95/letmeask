import copyImage from '../../assets/copy.svg' // Icon //
import { ClipboardContainer } from './styles' // CSS //

interface ClipboardProps  {
    code: string
}

export function Clipboard({ code }: ClipboardProps) {

    function copyRoomCodeToClipboard() {
        code && navigator.clipboard.writeText(code)
    }

    return (
        <ClipboardContainer className='clipboard' onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImage} alt="Copiar código" />
            </div>
            <span>Código {code}</span>
        </ClipboardContainer>
    )
}
import toast, { Toaster } from 'react-hot-toast'
import ReactModal from 'react-modal'
import { database } from '../../services/firebase'
// Hooks //
import { useHistory } from 'react-router-dom'

import { FiXCircle } from 'react-icons/fi' // Icon //
// CSS //
import { ModalContainer } from './styles'
import './styles.scss'

type ModalProps = {
    isModalOpen: boolean,
    setIsModalOpen: (value: boolean) => void,
    roomId: string,
}

export function ModalClosedAtRoom({ isModalOpen, setIsModalOpen, roomId }: ModalProps) {
    const { push } = useHistory()

    async function handleCloseRoom() {
        try {
            await database.ref(`rooms/${roomId}`).update({
                closedAt: new Date()
            })

            toast.success("Sala encerrada com sucesso!")
            push('/')
        }
        catch (error) {
            toast.error("Erro ao encerrar sala!")
        }
    }

    function handleCloseModal() {
        setIsModalOpen(false)
    }

    return (
        <ReactModal
            isOpen={isModalOpen}
            className="Modal"
            overlayClassName='Overlay'>
            <ModalContainer>
                <FiXCircle size='64' color='#E73F5D' />

                <h1>Encerrar Sala</h1>

                <span>Tem certeza que você deseja encerrar esta sala?</span>

                <div className='modal-button-group'>
                    <button
                        type='button'
                        id='button-cancel'
                        onClick={handleCloseModal}>
                        Cancelar
                    </button>
                    <button
                        type='button'
                        id='button-delete'
                        onClick={handleCloseRoom}>
                        Excluir
                    </button>
                </div>
                <Toaster position='top-center' />
            </ModalContainer>
        </ReactModal>
    )
}
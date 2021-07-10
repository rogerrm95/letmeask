import toast, { Toaster } from 'react-hot-toast'
import ReactModal from 'react-modal'
import { database } from '../../services/firebase'

import { FiTrash } from 'react-icons/fi' // Icon //

import './styles.scss' // SCSS //

type ModalProps = {
    isModalOpen: boolean,
    setIsModalOpen: (value: boolean) => void,
    questionId: string,
    roomId: string,
}

export function ModalDeleteAnwser({ isModalOpen, setIsModalOpen, questionId, roomId }: ModalProps) {

    async function handleRemoveToQuestion() {
        try {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
            setIsModalOpen(false)
            toast.success("Pergunta excluída com sucesso!")
        }
        catch {
            toast.error("Ocorreu um erro ao excluir, por favor tente novamente!")
        }
    }

    function handleCloseModal() {
        setIsModalOpen(false)
    }

    return (
        <ReactModal isOpen={isModalOpen} className='Modal' overlayClassName='Overlay'>

            <FiTrash size='64' color='#E73F5D' />

            <h1>Excluir pergunta</h1>

            <span>Tem certeza que você deseja excluir esta pergunta?</span>

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
                    onClick={handleRemoveToQuestion}>
                    Excluir
                </button>
            </div>
            <Toaster position='top-center' />
        </ReactModal>
    )
}
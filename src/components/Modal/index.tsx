import toast, { Toaster } from 'react-hot-toast'
import ReactModal from 'react-modal'
import { database } from '../../services/firebase'

import './styles.scss'

type ModalProps = {
    isModalOpen: boolean,
    setIsModalOpen: (value: boolean) => void,
    questionId: string,
    roomId: string
}

export function Modal({ isModalOpen, setIsModalOpen, questionId, roomId }: ModalProps) {

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
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5.99988H5H21" stroke="#E73F5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#E73F5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

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
            <Toaster position='top-center'/>
        </ReactModal>
    )
}
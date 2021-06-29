// Icons //
import { FiUser, FiTrash, FiCheck, FiMessageSquare, FiThumbsUp } from 'react-icons/fi'

import '../styles/components/questions.scss'

// RETIRAR //
const isliked = true

export function Questions() {
    return (
        <li className='question-item'>
            <p>
                Olá, eu gostaria de saber como criar um componente funcional dentro do React e se
                existe diferença na perfomance entre um componente com classes.
                existe diferença na perfomance entre um componente com classes.
            </p>

            <footer>
                <div className='user-info'>
                    <div><FiUser color='#F8F8F8'/></div>
                    <span>Rogério Marques</span>
                </div>

                <div className='actions-group'>
                    <FiCheck size='24'/>
                    <FiMessageSquare size='24'/>
                    <FiTrash className='delete' size='24'/>
                    
                    {isliked && <FiThumbsUp size='24'/>}
                </div>
            </footer>
        </li>
    )
}
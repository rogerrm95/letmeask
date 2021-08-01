import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi"; // Icon //
import { Switcher } from "../Switcher"; // Component //
import './styles.scss'

type HomeHeaderProps = {
    redirectTo: string
}

export function HomeHeader({ redirectTo }: HomeHeaderProps) {
    return (
        <header className='header-container'>
            <Link to={redirectTo} >
                <FiArrowLeft size={20} color="#835AFD" />
            </Link>
            <Switcher />
        </header>
    )
}
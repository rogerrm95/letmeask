import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi"; // Icon //
import { Switcher } from "../Switcher"; // Component //
import { HeaderContainer } from './styles'

type HomeHeaderProps = {
    redirectTo: string
}

export function HomeHeader({ redirectTo }: HomeHeaderProps) {
    return (
        <HeaderContainer className='header-container'>
            <Link to={redirectTo} >
                <FiArrowLeft size={20} color="#835AFD" />
            </Link>
            <Switcher />
        </HeaderContainer>
    )
}
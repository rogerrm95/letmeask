import { useTheme } from '../../hooks/useTheme'

import ReactSwitchButton from 'react-switch'

import MoonIcon from '../../assets/moon.svg'
import SunIcon from '../../assets/sun.svg'

import './styles.scss'

export function SwitchButton() {
    const { themes, toggleThemes } = useTheme()

    return (
        <div id='switcher-container'>
            <span className={themes !== 'light' ? "disabled" : ''}>
                <img src={SunIcon} alt="" />
            </span>

            <ReactSwitchButton
                height={20}
                width={42}
                checked={themes === 'light' ? false : true} handleDiameter={28} offHandleColor='#835AFD'
                onColor='#835AFD'
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={toggleThemes}
                borderRadius={16}
                className='switch-button'
            />

            <span className={themes !== 'dark' ? "disabled" : ''}>
                <img src={MoonIcon} alt="" />
            </span>
        </div>
    )
}
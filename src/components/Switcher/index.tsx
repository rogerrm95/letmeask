import ReactSwitchButton from 'react-switch'
import { useTheme } from '../../hooks/useTheme'
// Icons //
import MoonIcon from '../../assets/moon.svg'
import SunIcon from '../../assets/sun.svg'

import { SwitcherContainer } from './styles' // CSS //


export function Switcher() {

    const { themeMode, toggleThemes } = useTheme()

    return (
        <SwitcherContainer>
            <span className={themeMode !== 'light' ? "disabled" : ''}>
                <img src={SunIcon} alt="Sol" />
            </span>

            <ReactSwitchButton
                height={20}
                width={42}
                checked={themeMode === 'light' ? false : true} handleDiameter={28} offHandleColor='#835AFD'
                onColor='#835AFD'
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={toggleThemes}
                borderRadius={16}
                className='switch-button'/>

            <span className={themeMode !== 'dark' ? "disabled" : ''}>
                <img src={MoonIcon} alt="Lua" />
            </span>
        </SwitcherContainer>
    )
}
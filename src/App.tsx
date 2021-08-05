import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { DefaultTheme, ThemeProvider as ThemeProviderStyledComponents } from 'styled-components';
// Context //
import { AuthContextProvider } from './contexts/AuthContext'
import { useTheme } from './hooks/useTheme';
// Pages //
import { AdminHome } from './pages/AdminHome'
import { AdminRoom } from './pages/AdminRoom';
import { CreateRoom } from './pages/CreateRoom';
import { Home } from './pages/Home';
import { Landing } from './pages/Landing'
import { Room } from './pages/Room';

import GlobalStyle from './styles/global' // Styles //


function App() {

  const { theme } = useTheme()
  const themeConfig = theme as DefaultTheme

  return (
    <ThemeProviderStyledComponents theme={themeConfig}>
      <div style={{ height: '100%' }}>
        <BrowserRouter>
          <GlobalStyle />
          <AuthContextProvider>
            <Switch>
              <Route path='/' component={Landing} exact />
              <Route path='/home' component={Home} />
              <Route path='/rooms/:id' component={Room} />
              <Route path='/admin/home' component={AdminHome} />
              <Route path='/admin/rooms/new' component={CreateRoom} />
              <Route path='/admin/rooms/:id' component={AdminRoom} />
            </Switch>
          </AuthContextProvider>
        </BrowserRouter>
      </div>
    </ThemeProviderStyledComponents>
  );
}
export default App;
import { Switch, Route, BrowserRouter } from 'react-router-dom'
// Context //
import { AuthContextProvider } from './contexts/AuthContext'
// Pages //
import { AdminHome } from './pages/AdminHome'
import { AdminRoom } from './pages/AdminRoom';
import { CreateRoom } from './pages/CreateRoom';
import { Home } from './pages/Home';
import { Landing } from './pages/Landing'
import { Room } from './pages/Room';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
  );
}

export default App;
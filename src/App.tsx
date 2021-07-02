import { Switch, Route, BrowserRouter } from 'react-router-dom'
// Context //
import { AuthContextProvider } from './contexts/AuthContext'
// Pages //
import { Home } from './pages/Home';
import { CreateRoom } from './pages/CreateRoom';
import { AdminRoom } from './pages/AdminRoom';
import { Room } from './pages/Room';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/rooms/new' component={CreateRoom} />
            <Route path='/admin/rooms/:id' component={AdminRoom} />
            <Route path='/rooms/:id' component={Room} />
          </Switch>

        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
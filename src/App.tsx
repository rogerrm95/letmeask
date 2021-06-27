import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
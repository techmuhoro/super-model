import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { home, login, error } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={home} />
        <Route exact path='/login' component={login} />
        <Route component={error} />
      </Switch>
    </Router>
  );
}

export default App;

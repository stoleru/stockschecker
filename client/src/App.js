import './App.css';
import { Container } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from './components/Navigation/Navigation';
import StocksPage from './pages/StocksPage/StocksPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';

function App() {
  return (
    <Router>
      <Container>
        <Navigation />
        <Switch>
          <Route path="/settings" exact>
            <SettingsPage />
          </Route>
          <Route path="/">
            <StocksPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

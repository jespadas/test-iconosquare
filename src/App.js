import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header"><img src="https://cdn.iconosquare.com/themes/2018-logged/img/icono-logo-white.svg?v=0.1.014" alt="iconosquare" />iconosquare</h2>
        <div>
          <Route exact path="/create" component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>
        <Route path='/update' component={Update} />
      </div>
    </Router>
  );
}

export default App;

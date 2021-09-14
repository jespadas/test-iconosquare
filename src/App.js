import { AppContext } from './context/AppContext';
import { AppRouter } from './routers/AppRouter';
import './styles.css';

function App() {
  return (
    <AppContext.Provider value>
      <AppRouter />
    </AppContext.Provider>
  );
}

export default App;

import './styles.css';
import { MainBody } from './components/ui/MainBody';

import { AppContext } from './context/AppContext';

function App() {
  return (
    <AppContext.Provider value>
      <MainBody />
    </AppContext.Provider>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import { InitialParameters } from './features/initialParams';

function App() {

  const [page, setPage] = useState('initial')

  return (
    <div className="App">
      {
        page === 'initial' && (
          <>
            <div className='navigation'><button onClick={() => setPage('lapiseira')}>{'Próximo ->'}</button></div>
            <InitialParameters />
          </>
        )
      }
    </div>
  );
}

export default App;
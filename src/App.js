import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/navigation";
import { InitialParameters } from "./features/initialParams";
import { Lapiseira } from './features/lapiseira';
import Results from './features/results/Results';

function App() {
  const [page, setPage] = useState("initial");
  return (
    <div className="App">
      {page === "initial" && (
        <>
          <Navigation setPage={setPage} pageName='Parâmetros Iniciais' nextPage='mechanicalpen' />
          <InitialParameters />
        </>
      )}
      {
        page === 'mechanicalpen' && (
          <>
            <Navigation setPage={setPage} pageName='Dados da Lapiseira' previousPage='initial' nextPage='results' />
            <Lapiseira />
          </>
        )
      }
      {
        page === 'results' && (
          <>
            <Navigation setPage={setPage} pageName='Resultados' previousPage='mechanicalpen' />
            <Results />
          </>
        )
      }
    </div>
  );
}

export default App;

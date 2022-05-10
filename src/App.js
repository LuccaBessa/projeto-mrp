import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/navigation";
import { InitialParameters } from "./features/initialParams";
import {Lapiseira} from './features/lapiseira'

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
            <Navigation setPage={setPage} pageName='Dados da Lapiseira' previousPage='initial' />
            <Lapiseira />
          </>
        )
      }
    </div>
  );
}

export default App;

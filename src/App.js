import { useState } from "react";
import "./App.css";
import { InitialParameters } from "./features/initialParams";

function App() {
  const [page, setPage] = useState("initial");

  return (
    <div className="App">
      {page === "initial" && (
        <>
          <div className="navigation">
            <span> Projeto MRP </span>
            <button
              className="button button-next"
              onClick={() => setPage("mechanicalpen")}
            >
              {"Próximo"}
            </button>
          </div>
          <InitialParameters />
        </>
      )}
      {
        page === 'mechanicalpen' && (
          <>
            <div className="navigation">
              <span> Projeto MRP </span>

              <div className='actions'>
                <button className="button button-back" onClick={() => setPage('initial')}>{'Voltar'}</button>
                <button
                  className="button button-next"
                  onClick={() => setPage("result")}
                >
                  {"Próximo"}
                </button>
              </div>
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;

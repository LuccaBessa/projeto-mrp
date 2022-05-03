import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/naviagtion";
import { InitialParameters } from "./features/initialParams";

function App() {
  const [page, setPage] = useState("initial");

  return (
    <div className="App">
      {page === "initial" && (
        <>
          <Navigation setPage={setPage} nextPage='mechanicalpen' />
          <InitialParameters />
        </>
      )}
      {
        page === 'mechanicalpen' && (
          <>
            <Navigation setPage={setPage} previousPage='initial' />
          </>
        )
      }
    </div>
  );
}

export default App;

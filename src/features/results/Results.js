import "./results.css";

import { useStoreState } from "easy-peasy";
import React from "react";

import { calculate } from "../../calc/calc";

const Results = () => {
  const items = useStoreState((store) => store.items.items);

  const results = [calculate(items)[0]];
  //  const results = items;

  return (
    <>
      <div className="results-container">
        {results.map((item) => {
          return (
            <div className="result-container">
              <div className="result-info-container">
                <div className="info">
                  <div className="info-title">
                    <span>{item.nome}</span>
                  </div>
                  <div className="result-info-box">
                    <span className="info-text">
                      <span> Lote </span> ........... {item.tamanhoLote}
                    </span>
                    <span className="info-text">
                      <span> LT </span> ................ {item.leadTime}
                    </span>
                    <span className="info-text">
                      <span> ES </span> ............... {item.estoqueSegurança}
                    </span>
                  </div>
                </div>
              </div>
              <div className="result-leads-container">
                <div className="results-row">
                  <span className="results-header">Períodos</span>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                    return (
                      <span className="results-header" key={index}>
                        {item}
                      </span>
                    );
                  })}
                </div>

                <div className="results-row">
                  <span className="results-name">Necessidade bruta</span>
                  {item.entradas.map((ent, index) => {
                    return (
                      <span
                        className={`${
                          ent === -1 ? "stock-out" : "results-txt"
                        }`}
                        key={index}
                      >
                        {ent === -1 ? 0 : ent}
                      </span>
                    );
                  })}
                </div>

                <div className="results-row">
                  <span className="results-name">
                    {`Est. projetado | `}
                    <b>{item.estoqueInicial}</b>
                  </span>
                  {item.estoqueProjetado.map((ent, index) => {
                    return (
                      <span
                        className={`${
                          ent === -1 ? "stock-out" : "results-txt"
                        }`}
                        key={index}
                      >
                        {ent === -1 ? 0 : ent}
                      </span>
                    );
                  })}
                </div>

                <div className="results-row">
                  <span className="results-name">Recebimentos Planej.</span>
                  {item.recebimentosProgramados.map((ent, index) => {
                    return (
                      <span
                        className={`${
                          ent === -1 ? "stock-out" : "results-txt"
                        }`}
                        key={index}
                      >
                        {ent === -1 ? 0 : ent}
                      </span>
                    );
                  })}
                </div>

                <div className="results-row">
                  <span className="results-name">
                    Liberação das Ordens Planej.
                  </span>
                  {item.saida.map((ent, index) => {
                    return (
                      <span
                        className={`${
                          ent === -1 ? "stock-out" : "results-txt"
                        }`}
                        key={index}
                      >
                        {ent === -1 ? 0 : ent}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Results;

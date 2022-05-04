import React from "react";
import "./styles.css";
import { useStoreState, useStoreActions } from "easy-peasy";

export const InitialParameters = () => {
  const items = useStoreState((store) => store.items.items);
  const changeParameter = useStoreActions(
    (action) => action.items.changeParameter
  );

  const headers = [
    "Nome",
    "Lote mínimo",
    "Lead Time",
    "Estoque de segurança",
    "Quantidade da receita",
    "Estoque inicial",
  ];
  const parametersToChange = [
    "nome",
    "tamanhoLote",
    "leadTime",
    "estoqueSegurança",
    "quantidadeReceita",
    "estoqueInicial",
  ];

  const handleChangeParameter = (value, item, key) => {
    changeParameter({
      index: item.id,
      fieldId: key,
      value: value,
      duplicado: item.duplicado,
    });
  };

  return (
    <div className="container">
      <div className="row">
        {headers.map((item) => {
          return <span className="header">{item}</span>;
        })}
      </div>
      {items.map((item) => {
        return (
          <div className="row" key={item.id}>
            {
              // eslint-disable-next-line array-callback-return
              Object.keys(item).map((key) => {
                if (parametersToChange.includes(key)) {
                  if (key === "nome")
                    return <span className="name">{item[key]}</span>;
                  return (
                    <input
                      value={item[key]}
                      onChange={(e) =>
                        handleChangeParameter(e.target.value, item, key)
                      }
                      type="number"
                      className="input"
                    />
                  );
                }
              })
            }
          </div>
        );
      })}
    </div>
  );
};

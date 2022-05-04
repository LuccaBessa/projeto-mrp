import "./styles.css";

export const Navigation = ({ previousPage, pageName, nextPage, setPage }) => {
  return (
    <div className="navigation">
      <span> Projeto MRP - { pageName } </span>
      <div className="actions">
        {previousPage && (
          <button
            className="button button-back m-r-10"
            onClick={() => setPage(previousPage)}
          >
            {"Voltar"}
          </button>
        )}
        {nextPage ? (
          <button
            className="button button-next"
            onClick={() => setPage(nextPage)}
          >
            {"Próximo"}
          </button>
        ) : (
          <button className="button button-disabled" disabled>
            {"Próximo"}
          </button>
        )}
      </div>
    </div>
  );
};

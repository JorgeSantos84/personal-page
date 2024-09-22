import React, { useState } from "react";

const ContadorExercicio = () => {
  const [contador, setContador] = useState(0);

  const adicionarUm = () => {
    setContador(contador + 1);
  };
  return (
    <div className="center">
      <h1>{contador}</h1>
      <button className="btn btn-primary" onClick={() => adicionarUm()}>
        +1
      </button>
    </div>
  );
};

export default ContadorExercicio;

import React from "react";
import "./Buttons.css"

const Buttons = () => {
  return (
    <div>
      <div className="container-buttons">
        <div className="buttons">
          <button>VENTAS</button>
          <button>CLIENTES</button>
          <button>PRODUCTOS</button>
          <button>INVENTARIO</button>
          <button>CONFIGURACION</button>
          <button>CORTE</button>
        </div>
        <div className="sub-container-buttons">
          <button>( *** )</button>
          <button>SALIR</button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;

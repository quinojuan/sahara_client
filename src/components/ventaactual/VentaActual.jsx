import React from "react";
import "./VentaActual.css";

const VentaActual = () => {
  return (
    <div className="container-venta-actual">
      <div className="A">

        <div className="sub-a">
          <label>0</label>
          <p>Productos en la venta actual</p>
        </div>

        <div>
          <button>Cambiar</button>
          <button>Pendiente</button>
          <button>Eliminar</button>
        </div>

      </div>

      <div className="B">
        <button>COBRAR</button>
      </div>
      
    </div>
  );
};

export default VentaActual;

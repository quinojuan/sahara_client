import React from "react";
import "./DataTable.css";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../../src/Data.json";

const DataTable = () => {
  return (
    <div className="container-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Código de barras</th>
            <th>Descripción del producto</th>
            <th>Precio de venta</th>
            <th>Cant.</th>
            <th>Importe</th>
            <th>Existencia</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((art) => (
            <tr>
              <td>{art.codigo}</td>
              <td>{art.descripcion}</td>
              <td>{art.precio}</td>
              <td>{art.cantidad}</td>
              <td>{art.precio * art.cantidad}</td>
              <td>{art.existencia - art.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;

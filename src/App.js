import React from "react";
import "./App.css";
import Buttons from "./components/buttons/Buttons";
import DataTable from "./components/datatable/DataTable";
import NavBar from "./components/navbar/NavBar";
import Options from "./components/options/Options";
import ProductSearch from "./components/productsearch/ProductSearch";
import TitleBar from "./components/titlebar/TitleBar";
import Total from "./components/total/Total";
import VentaActual from "./components/ventaactual/VentaActual";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Buttons />
      <TitleBar />
      <ProductSearch />
      <Options />
      <DataTable />
      <div className="barra-inferior">
        <VentaActual />
        <Total />
      </div>
    </div>
  );
}

export default App;

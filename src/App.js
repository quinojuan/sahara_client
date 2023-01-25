import React from "react";
import "./App.css";
import Buttons from "./components/buttons/Buttons";
import NavBar from "./components/navbar/NavBar";
import Options from "./components/options/Options";
import ProductSearch from "./components/productsearch/ProductSearch";
import TitleBar from "./components/titlebar/TitleBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Buttons />
      <TitleBar />
      <ProductSearch />
      <Options />
    </div>
  );
}

export default App;

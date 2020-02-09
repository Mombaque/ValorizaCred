import React from "react";
import "./App.css";
import "./css/card.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import CardsImageRow from "./components/card-image-row";
import DaycoImage from "./components/daycovalImage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <DaycoImage />
      <h1 className="display-3">Conheça nossos produtos</h1>
      <CardsImageRow />
    </div>
  );
}

export default App;

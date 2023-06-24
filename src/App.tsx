import React from "react";
import "./App.css";

let pizza: string = "Salami";

let price: number = 20;
let atStock: boolean = true;

let pizzas: string[] = ["Salami", "Saussage"];

function App() {
  return <div className="App">{pizzas}</div>;
}

export default App;

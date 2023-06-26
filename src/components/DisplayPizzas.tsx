import React, { FC } from "react";
import SinglePizza from "./SinglePizza";
import Pizza from "../models/Pizza";

interface displayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<displayPizzasProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza key={pizza.id} deletePizza={deletePizza} updatePizza={updatePizza} pizza={pizza} />
        );
      })}
    </div>
  );
};

export default DisplayPizzas;

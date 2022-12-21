import React from "react";
import { ReactElement } from "react";
import "./Card.css";

type CardProps = {
  name: string;
  age: number;
  striked: boolean;
  setStriked: (val: boolean) => void;
};

function Card(props: CardProps): ReactElement {
  const { name, age, striked, setStriked } = props;
  return (
    <div className="card">
      <h1 data-testid="card-header">Welcome to the card</h1>
      <p data-testid="card-name">{name}</p>
      <p data-testid="card-age">{age}</p>
      <button data-testid="card-striker" onClick={() => setStriked(!striked)}>
        {striked ? "X" : "O"}
      </button>
    </div>
  );
}

export default Card;

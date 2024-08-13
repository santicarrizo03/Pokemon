import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>Pokemons</h1>
      <Link to="/home">
        <button>Start</button>
      </Link>
    </div>
  );
}

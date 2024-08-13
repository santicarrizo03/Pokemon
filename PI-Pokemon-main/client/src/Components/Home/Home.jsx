import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../Redux/Action";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

import "./home.css"

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const [order, setOrder] = useState(""); //Para modificar el estado local y me ayude al renderizado
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  useEffect(() => {
    dispatch(getPokemons());
  },[dispatch]);

  return (
    <div className="container">
      
      <div className="card">
        {currentPokemons?.map((e, k) => {
          return (
            <div key={k}>
              <Card
                key={e.id}
                id={e.id}
                name={e.name}
                image={e.img}
                types={e.types}
              />
            </div>
          );
        })}
      </div>
      <Pagination/>
    </div>
  );
}

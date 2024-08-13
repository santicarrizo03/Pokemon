import React from "react";

export default function Pagination({
  allPokemons,
  pokemonsPerPage,
  pagination,
}) {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNum.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNum?.map((number) => (
          <li key={number}>
            <a onClick={() => pagination(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

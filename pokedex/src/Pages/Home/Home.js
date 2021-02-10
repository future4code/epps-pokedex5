import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PokeCard from "../../components/PokeCard/PokeCard";
import axios from "axios";

const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: auto;
  min-height: calc(100vh - 120px);
`;

export default function Home() {
  const [listPokemons, setListPokemons] = useState([]);

  const getPokemons = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";
    axios
      .get(url)
      .then((res) => {
        setListPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderPokemons = listPokemons.map((pokemon) => {
    return <PokeCard pokemon={pokemon.name} />;
  });

  useEffect(() => {
    getPokemons();
  }, []);

  return <DivContent>{renderPokemons}</DivContent>;
}

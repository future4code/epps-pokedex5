import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PokeCard from "../../components/PokeCard/PokeCard";
import axios from "axios";
import { usePokedexWallet } from "../../contexts/ctxPokedex";

const DivContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: auto;
  min-height: calc(100vh - 120px);
`;

export default function Home() {
  const [listPokemons, setListPokemons] = useState([]);
  const { PokedexWallet, setPokedexWallet } = usePokedexWallet([]);
  const history = useHistory();

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

  const addPokemon = (pokemon) => {
    setPokedexWallet([...PokedexWallet, pokemon]);

    let newArray = [...listPokemons];
    const index = newArray.findIndex((i) => {
      return i.name === pokemon.name;
    });
    newArray.splice(index, 1);

    setListPokemons(newArray);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const renderPokemons = listPokemons.map((pokemon) => {
    return (
      <PokeCard
        key={pokemon}
        pokemon={pokemon.name}
        actionButton={() => addPokemon(pokemon)}
        nameButton="adc"
      />
    );
  });

  return <DivContent>{renderPokemons}</DivContent>;
}

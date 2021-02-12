import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import PokeCard from "../../components/PokeCard/PokeCard";

import { usePokedexWallet } from "../../contexts/ctxPokedex";
import { usePokemonHome } from "../../contexts/ctxPokemonsHome";

const DivContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: auto;
  min-height: calc(100vh - 120px);
`;

export default function Home() {
  const {
    PokemonsHome,
    setPokemonsHome,
    getPokemonsFirstTime,
  } = usePokemonHome([]);
  const { PokedexWallet, setPokedexWallet } = usePokedexWallet([]);
  const history = useHistory();

  const getPokemons = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";
    axios
      .get(url)
      .then((res) => {
        setPokemonsHome(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPokemon = (pokemon) => {
    setPokedexWallet([...PokedexWallet, pokemon]);

    let newArray = [...PokemonsHome];
    const index = newArray.findIndex((i) => {
      return i.name === pokemon.name;
    });
    newArray.splice(index, 1);

    setPokemonsHome(newArray);
  };

  useEffect(() => {
    getPokemonsFirstTime(getPokemons);
  }, []);

  const renderPokemons = PokemonsHome.map((pokemon) => {
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

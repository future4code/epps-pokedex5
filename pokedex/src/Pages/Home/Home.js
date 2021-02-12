import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import PokeCard from "../../components/PokeCard/PokeCard";

import { usePokedexWallet } from "../../contexts/ctxPokedex";
import { usePokemonHome } from "../../contexts/ctxPokemonsHome";
import { goToPokemonDetail } from "../../routes/Coordinator";

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
    FirstTime,
    setFirstTime,
  } = usePokemonHome([]);
  const { PokedexWallet, setPokedexWallet } = usePokedexWallet([]);
  const history = useHistory();

  const getPokemons = () => {
    if (!FirstTime) {
      return;
    }

    const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";
    axios
      .get(url)
      .then((res) => {
        setPokemonsHome(res.data.results);
        setFirstTime(false);
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
    getPokemons();
    console.log(PokemonsHome);
  }, []);

  const renderPokemons = PokemonsHome.map((pokemon) => {
    return (
      <PokeCard
        key={pokemon}
        pokemon={pokemon.name}
        actionButton={() => addPokemon(pokemon)}
        nameButton="adc"
        detailPokemon={() => goToPokemonDetail(history, pokemon.name)}
      />
    );
  });

  return <DivContent>{renderPokemons}</DivContent>;
}

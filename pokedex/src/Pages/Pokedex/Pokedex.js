import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import PokeCard from "../../components/PokeCard/PokeCard";

import { usePokedexWallet } from "../../contexts/ctxPokedex";
import { usePokemonHome } from "../../contexts/ctxPokemonsHome";
import { goToPokemonDetail } from "../../routes/Coordinator";

const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: auto;
  min-height: calc(100vh - 120px);
`;

export default function Pokedex() {
  const { PokedexWallet, setPokedexWallet } = usePokedexWallet();
  const { PokemonsHome, setPokemonsHome } = usePokemonHome();
  const history = useHistory();

  const removePokemon = (pokemon) => {
    const newArray = PokedexWallet.filter((pokeFilt) => {
      return pokeFilt !== pokemon;
    });

    setPokemonsHome([...PokemonsHome, pokemon]);

    setPokedexWallet(newArray);
  };

  const renderPokemons = PokedexWallet.map((pokemon) => {
    return (
      <PokeCard
        pokemon={pokemon.name}
        nameButton="remove"
        actionButton={() => removePokemon(pokemon)}
        detailPokemon={() => goToPokemonDetail(history, pokemon.name)}
      />
    );
  });

  return <DivContent>{renderPokemons}</DivContent>;
}

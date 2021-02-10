import React from "react";
import styled from "styled-components";
import { usePokedexWallet } from "../../contexts/ctxPokedex";
import PokeCard from "../../components/PokeCard/PokeCard";

const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: auto;
  min-height: calc(100vh - 120px);
`;

export default function Pokedex() {
  const { PokedexWallet, setPokedexWallet } = usePokedexWallet();

  const removePokemon = (pokemon) => {
    const newArray = PokedexWallet.filter((pokeFilt) => {
      return pokeFilt !== pokemon;
    });

    setPokedexWallet(newArray);
  };

  const renderPokemons = PokedexWallet.map((pokemon) => {
    return (
      <PokeCard
        pokemon={pokemon.name}
        nameButton="remove"
        actionButton={() => removePokemon(pokemon)}
      />
    );
  });

  return <DivContent>{renderPokemons}</DivContent>;
}

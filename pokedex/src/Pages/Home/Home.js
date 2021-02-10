import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PokeCard from "../../components/PokeCard/PokeCard";
import axios from "axios";
import { usePokedexWallet } from "../../contexts/ctxPokedex";

const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: auto;
  min-height: calc(100vh - 120px);
`;

export default function Home() {
  const [listPokemons, setListPokemons] = useState([]);
  const { PokedexWallet, setPokedexWallet } = usePokedexWallet([]);

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
    console.log("Pokemon clicado: ", pokemon);
    setPokedexWallet([...PokedexWallet, pokemon]);

    let newArray = listPokemons.filter((pokeFilt) => {
      return pokeFilt !== pokemon;
    });

    console.log("pokemons renderizados", newArray);
    setListPokemons(newArray);
  };

  const renderPokemons = listPokemons.map((pokemon) => {
    return (
      <PokeCard pokemon={pokemon.name} actionButton={() => addPokemon(pokemon)} nameButton="adc"/>
    );
  });

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    console.log('useEffect ',listPokemons);
  }, [listPokemons]);

  return <DivContent>{renderPokemons}</DivContent>;
}

// [
//   { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
//   { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
//   { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
// ]

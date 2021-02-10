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
  const { PokedexWallet, setPokedexWallet } = usePokedexWallet();

  const getPokemons = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";
    axios
      .get(url)
      .then((res) => {
        console.log("Request: ", res.data.results);
        setListPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPokemon = (pokemon) => {
    console.log("Pokemon clicado: ", pokemon);
    // setPokedexWallet([...PokedexWallet, pokemon]);

    let newArray = listPokemons.filter((pokeFilt) => {
      return pokeFilt !== pokemon;
    });

    console.log("pokemons renderizados", newArray);
    setListPokemons(newArray);
  };

  const renderPokemons = listPokemons.map((pokemon) => {
    return (
      <PokeCard pokemon={pokemon.name} addPokemon={() => addPokemon(pokemon)} />
    );
  });

  useEffect(() => {
    getPokemons();
  }, []);

  // useEffect(() => {
  //   console.log("PokedexWallet", PokedexWallet);
  //   console.log("Listpokemon", listPokemons);
  // }, [PokedexWallet]);

  return <DivContent>{renderPokemons}</DivContent>;
}

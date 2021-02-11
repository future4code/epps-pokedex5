import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import DetailsLayout from '../../components/DetailsLayout/DetailsLayout'
import { useParams } from 'react-router-dom'

function DetailsPage() {
  const { pokemonId } = useParams();
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
  const [pokemonData, setPokemonData] = useState({});
  const getPokemonDetails = () => {
    axios
      .get(BASE_URL)
      .then((response) => {
        const { data } = response;
        setPokemonData(data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    getPokemonDetails()
    console.log(pokemonData)
  }, []);

  return (
    <div>
      <header>
      <h1>Nome: {pokemonData.forms && pokemonData.forms[0].name}</h1> 
      </header>
      <div>
        <img src={pokemonData.sprites && pokemonData.sprites.front_default}/>
        <img src={pokemonData.sprites && pokemonData.sprites.back_default}/>
      </div>
      <div>
        <h2>Stats</h2>
        <p>HP: {pokemonData.stats && pokemonData.stats[0].base_stat}</p>
        <p>Attack: {pokemonData.stats && pokemonData.stats[1].base_stat}</p>
        <p>Defense: {pokemonData.stats && pokemonData.stats[2].base_stat}</p>
        <p>Special-attack: {pokemonData.stats && pokemonData.stats[3].base_stat}</p>
        <p>Special-defense: {pokemonData.stats && pokemonData.stats[4].base_stat}</p>
        <p>Speed: {pokemonData.stats && pokemonData.stats[5].base_stat}</p>
      </div>
      <div>
        <h3>{pokemonData.types && pokemonData.types[0].type.name}</h3>
        <h3>{pokemonData.types && pokemonData.types[1].type.name}</h3>
      </div>
      <div>
        <h2>Moves:</h2>
        <p>{pokemonData.moves && pokemonData.moves[0].move.name}</p>
        <p>{pokemonData.moves && pokemonData.moves[1].move.name}</p>
        <p>{pokemonData.moves && pokemonData.moves[2].move.name}</p>
      </div>
    </div>
  );
}

export default DetailsPage;
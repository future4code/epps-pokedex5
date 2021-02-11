import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import DetalhesLayout from '../../components/DetalhesLayout/DetalhesLayout'

function DetailsPage (props) {
  const pokemonId = props
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
  const [pokemonData, setPokemonData] = useState({});
  
  const pokemon = 
  {
    nome: data.forms.name,
    imagemF: data.sprites.front_default,
    imagemC: data.sprites.back_default,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    specialAttack: data.stats[3].base_stat,
    specialDefense: data.stats[4].base_stat,
    speed: data.stats[5].base_stat,
    type1: data.types[0].name,
    typ2: data.types[1].name,
    move1: data.moves[0].name,
    move2: data.moves[1].name,
    move3: data.moves[2].name
  }

useEffect(() => {
  axios
  .get(BASE_URL)
  .then((response) {
      const { data } = response;
      setPokemonData(data);
    })
    .catch((error) {
      console.log(error.message);
    });
}, [pokemonId]);

return (
  <div>
    <header>
    <h1>Nome: {pokemon.nome}</h1>
    </header>
    <div class="leftbar">
      <img src={pokemon.imagemF} alt="pokemon front"/>
      <img src={pokemon.imagemC} alt="pokemon back"/>
    </div>
    <div class="midbar">
      <h2>Stats</h2>
      <p>HP: {pokemon.hp}</p>
      <p>Attack: {pokemon.attack}</p>
      <p>Defense: {pokemon.defense}</p>
      <p>Special-attack: {pokemon.specialAttack}</p>
      <p>Special-defense: {pokemon.specialDefense}</p>
      <p>Speed: {pokemon.speed}</p>
    </div>
    <div class="rigthbar1">
      <h2>{pokemon.type1}</h2>
      <h2>{pokemon.type2}</h2>
    </div>
    <div class="rightbar2">
    <h2>Moves</h2>
    <p>{pokemon.move1}</p>
    <p>{pokemon.move2}</p>
    <p>{pokemon.move3}</p> 
  </div>
  );
}

export default DetailsPage;
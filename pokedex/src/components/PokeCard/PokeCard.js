import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const DivCenter = styled.div`
  display: flex;
  margin: 5px;
  gap: 20px;
`;

const Card = styled.div`
  width: 215px;
  height: 295px;
  border: solid #ffff66 8px;
  display: flex;
  flex-direction: column;
`;

const DivButton = styled.div`
  width: 215px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 10px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

const PokeName = styled.h3``;

export default function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  const getDetailPokemon = (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    axios
      .get(url)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailPokemon(props.pokemon);
  }, [props.pokemon]);

  return (
    <div>
      <DivCenter>
        <Card>
          {pokemon.sprites && <img src={pokemon.sprites.front_default} />}
          <PokeName>{pokemon.name}</PokeName>
          <DivButton>
            <Button onClick={props.actionButton}>
              {props.nameButton === "adc"
                ? "Adicionar a Pokedex"
                : "Remover da pokedex"}
            </Button>
            <Button onClick={props.detailPokemon}>Detalhes</Button>
          </DivButton>
        </Card>
      </DivCenter>
    </div>
  );
}

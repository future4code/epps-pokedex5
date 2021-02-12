import React, { useContext, createContext, useState } from "react";

export const PokemonsHomeContext = createContext();

export function PokemonsHomeProvider({ childrens }) {
  const [pokemonsHome, setPokemonsHome] = useState([]);

  return (
    <PokemonsHomeContext.Provider value={{ pokemonsHome, setPokemonsHome }}>
      {childrens}
    </PokemonsHomeContext.Provider>
  );
}

export default function usePokemonHome() {
  const context = useContext(PokemonsHomeContext);
  const { pokemonsHome, setPokemonsHome } = context;
  return { pokemonsHome, setPokemonsHome };
}

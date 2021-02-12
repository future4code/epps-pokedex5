import React, { useContext, createContext, useState } from "react";

const PokemonsHomeContext = createContext();

export default function PokemonsHomeProvider({ children }) {
  const [PokemonsHome, setPokemonsHome] = useState([]);

  return (
    <PokemonsHomeContext.Provider value={{ PokemonsHome, setPokemonsHome }}>
      {children}
    </PokemonsHomeContext.Provider>
  );
}

export function usePokemonHome() {
  const context = useContext(PokemonsHomeContext);
  const { PokemonsHome, setPokemonsHome } = context;

  function getPokemonsFirstTime (callback)  {
    if (!PokemonsHome[0]) {
      callback();
    }
  };

  return { PokemonsHome, setPokemonsHome, getPokemonsFirstTime };
}

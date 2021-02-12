import React, { useContext, createContext, useState } from "react";

//Cria o contexto
const PokemonsHomeContext = createContext();

//Cria os valores do contexto
export default function PokemonsHomeProvider({ children }) {
  const [PokemonsHome, setPokemonsHome] = useState([]);
  const [FirstTime, setFirstTime] = useState(true);

  return (
    <PokemonsHomeContext.Provider
      value={{ PokemonsHome, setPokemonsHome, FirstTime, setFirstTime }}
    >
      {children}
    </PokemonsHomeContext.Provider>
  );
}

//Um pequeno hook personalizado para exportar variaveis
export function usePokemonHome() {
  const context = useContext(PokemonsHomeContext);
  const { PokemonsHome, setPokemonsHome , FirstTime, setFirstTime} = context;
  return { PokemonsHome, setPokemonsHome, FirstTime, setFirstTime };
}

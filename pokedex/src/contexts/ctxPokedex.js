import React, { useContext, createContext, useState } from "react";

const PokedexWalletContext = createContext();

export default function PokedexWalletProvider({ children }) {
  const [PokedexWallet, setPokedexWallet] = useState([]);

  return (
    <PokedexWalletContext.Provider value={{ PokedexWallet, setPokedexWallet }}>
      {children}
    </PokedexWalletContext.Provider>
  );
}

export function usePokedexWallet() {
  const context = useContext(PokedexWalletContext);
  const { PokedexWallet, setPokedexWallet } = context;
  return { PokedexWallet, setPokedexWallet };
}

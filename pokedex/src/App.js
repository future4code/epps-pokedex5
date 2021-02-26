import "./App.css";
import Routes from "./routes/Routes";
import PokedexWalletProvider from "./contexts/ctxPokedex";
import PokemonsHomeProvider from "./contexts/ctxPokemonsHome";

function App() {
  return (
    <div>
      <PokedexWalletProvider>
        <PokemonsHomeProvider>
          <Routes />
        </PokemonsHomeProvider>
      </PokedexWalletProvider>
    </div>
  );
}

export default App;

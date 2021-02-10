import "./App.css";
import Routes from "./routes/Routes";
import PokedexWalletProvider from "./contexts/ctxPokedex";

function App() {
  return (
    <div>
      <PokedexWalletProvider>
        <Routes />
      </PokedexWalletProvider>
    </div>
  );
}

export default App;

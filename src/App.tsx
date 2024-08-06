import EstiloGlobal, { Container } from "./styles";
import BarraLateral from "./containers/BarraLateral";
import ListaDeNomes from "./containers/ListaDeNomes";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeNomes />
      </Container>
    </>
  );
}

export default App;

import { Provider } from "react-redux";

import EstiloGlobal, { Container } from "./styles";
import BarraLateral from "./containers/BarraLateral";
import ListaDeNomes from "./containers/ListaDeNomes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeNomes />
      </Container>
    </Provider>
  );
}

export default App;

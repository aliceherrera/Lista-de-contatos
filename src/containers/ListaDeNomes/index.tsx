import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

import Contato from "../../components/Contato";
import * as S from "./styles";

const ListaDeNomes = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);

  return (
    <S.Container>
      <S.Titulo>Lista de Contatos</S.Titulo>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <Contato
              nome={c.nome}
              apelido={c.apelido}
              numero={c.numero}
              email={c.email}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default ListaDeNomes;

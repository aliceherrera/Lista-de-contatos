import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

import Contato from "../../components/Contato";
import * as S from "./styles";

const ListaDeNomes = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  );

  const filtraTarefas = () => {
    if (termo) {
      return itens.filter(
        (item) => item.nome.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      );
    } else {
      return itens;
    }
  };
  return (
    <S.Container>
      <S.Titulo>Lista de Contatos</S.Titulo>
      <ul>
        <li>
          <S.Busca>{termo}</S.Busca>
        </li>
        <li>
          <S.Busca>{valor}</S.Busca>
        </li>
      </ul>

      <ul>
        {filtraTarefas().map((c) => (
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

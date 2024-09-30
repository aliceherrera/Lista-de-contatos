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
    let contatosFiltradas = itens;

    if (termo !== undefined) {
      contatosFiltradas = contatosFiltradas.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      );

      if (criterio === "categoria") {
        contatosFiltradas = contatosFiltradas.filter(
          (item) => item.categoria === valor
        );
      } else if (criterio === "status") {
        contatosFiltradas = contatosFiltradas.filter(
          (item) => item.status === valor
        );
      }
      return contatosFiltradas;
    } else {
      return itens;
    }
  };

  return (
    <S.Container>
      <S.Titulo>Lista de Contatos</S.Titulo>
      {/* <ul>
        <li>
          <S.Busca>{termo}</S.Busca>
        </li>
        <li>
          <S.Busca>{criterio}</S.Busca>
        </li>
        <li>
          <S.Busca>{valor}</S.Busca>
        </li>
      </ul> */}

      <ul>
        {filtraTarefas().map((c) => (
          <li key={c.nome}>
            <Contato
              nome={c.nome}
              apelido={c.apelido}
              numero={c.numero}
              email={c.email}
              id={c.id}
              status={c.status}
              categoria={c.categoria}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default ListaDeNomes;

import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

import Contato from "../../components/Contato";
import { MainContainer, Titulo } from "../../styles";

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
    <MainContainer>
      <Titulo>Lista de Contatos</Titulo>
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
    </MainContainer>
  );
};

export default ListaDeNomes;

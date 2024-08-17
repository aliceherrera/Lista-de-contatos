import Contato from "../../components/Contato";
import * as S from "./styles";

const contatos = [
  {
    nome: "Paulo Henrique",
    apelido: "henriSilva",
    numero: 123456789,
    email: "paulosilva@gmail.com",
  },
  {
    nome: "Nicolas Silva",
    apelido: "buzzz",
    numero: 123456789,
    email: "niconi@gmail.com",
  },
  {
    nome: "Alice Herrera",
    apelido: "milonga",
    numero: 123456789,
    email: "milonguera@gmail.com",
  },
];

const ListaDeNomes = () => (
  <S.Container>
    <S.Titulo>Lista de Contatos</S.Titulo>
    <ul>
      {contatos.map((c) => (
        <li key={c.nome}>
          <Contato
            nome={c.nome}
            apelido={c.apelido}
            numero={c.numero}
            email={c.email}
          />
        </li>
      ))}
    </ul>
  </S.Container>
);

export default ListaDeNomes;

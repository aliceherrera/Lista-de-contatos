import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MainContainer, Titulo } from "../../styles";
import * as S from "./styles";
import * as enums from "../../utils/enums/Categoria";
import Contato from "../../models/Contato";
import { cadastrar } from "../../store/reducers/contatos";

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [trabalho, setTabalho] = useState(enums.Categorias.TRABALHO);
  const [familia, setFamilia] = useState(enums.Categorias.FAMILIA);
  const [favorito, setFavorito] = useState(enums.Status.FAVORITO);

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault();

    const contatoParaAdicionar = new Contato(
      nome,
      apelido,
      numero,
      email,
      enums.Status.FAVORITO,
      enums.Categorias.FAMILIA,
      9
    );
    dispatch(cadastrar(contatoParaAdicionar));
    navigate("/");
  };

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <S.Container onSubmit={cadastrarContato}>
        <S.Formulario>
          <S.Input
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            type="text"
            placeholder="Nome"
          />
          <S.Input
            value={apelido}
            onChange={({ target }) => setApelido(target.value)}
            type="text"
            placeholder="Apelido"
          />
          <S.Input
            value={numero}
            onChange={({ target }) => setNumero(target.value)}
            type="number"
            placeholder="Telefone"
          />
          <S.Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="E-mail"
          />
        </S.Formulario>
        <S.Categoria>
          <S.Frase>Marcar contato como:</S.Frase>
          <input
            value={trabalho}
            onChange={(e) =>
              setTabalho(e.target.value as enums.Categorias.TRABALHO)
            }
            name="categoria"
            type="checkbox"
            id="trabalho"
          />{" "}
          <S.Label htmlFor="trabalho">Trabalho </S.Label>
          <input
            value={familia}
            onChange={(e) =>
              setFamilia(e.target.value as enums.Categorias.FAMILIA)
            }
            name="categoria"
            type="checkbox"
            id="familia"
          />{" "}
          <S.Label htmlFor="familia">Família</S.Label>
        </S.Categoria>
        <S.Categoria>
          <input
            value={favorito}
            onChange={(e) => setFavorito(e.target.value as enums.Status)}
            type="checkbox"
            id="favorito"
          />{" "}
          <S.Label htmlFor="favorito">Adicionar contato aos favoritos</S.Label>
        </S.Categoria>
        <S.BotaoSalvar type="submit">Salvar</S.BotaoSalvar>
      </S.Container>
    </MainContainer>
  );
};

export default Formulario;

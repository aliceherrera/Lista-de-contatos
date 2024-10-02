import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { MainContainer, Titulo } from "../../styles";
import * as S from "./styles";
import * as enums from "../../utils/enums/Categoria";
import Contato from "../../models/Contato";
import { cadastrar } from "../../store/reducers/contatos";
import { IMaskInput } from "react-imask";

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [categoria, setCategoria] = useState(enums.Categorias.OUTROS);

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault();

    // const contatoParaAdicionar = new Contato(
    //   nome,
    //   apelido,
    //   numero,
    //   email,
    //   enums.Status.NAOFAVORITO,
    //   categoria,
    //   1
    // );
    dispatch(
      cadastrar({
        nome,
        apelido,
        numero,
        email,
        status: enums.Status.NAOFAVORITO,
        categoria,
      })
    );
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
            as={IMaskInput}
            mask={"(00)0000-0000"}
            value={numero}
            onChange={({ target }) =>
              setNumero((target as HTMLInputElement).value)
            }
            type="any"
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
          {Object.values(enums.Categorias).map((categoria) => (
            <div key={categoria}>
              <input
                value={categoria}
                name="categoria"
                type="radio"
                onChange={(evento) =>
                  setCategoria(evento.target.value as enums.Categorias)
                }
                id={categoria}
                defaultChecked={categoria === enums.Categorias.OUTROS}
              />
              <S.Label htmlFor={categoria}>{categoria}</S.Label>
            </div>
          ))}
        </S.Categoria>
        {/* <S.Categoria>
          <input
            value={favorito}
            onChange={(e) => setFavorito(e.target.value as enums.Status)}
            type="checkbox"
            id="favorito"
          />{" "}
          <S.Label htmlFor="favorito">Adicionar contato aos favoritos</S.Label>
        </S.Categoria> */}
        <S.BotaoSalvar type="submit">Salvar</S.BotaoSalvar>
      </S.Container>
    </MainContainer>
  );
};

export default Formulario;

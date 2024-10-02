import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IMaskInput } from "react-imask";
import {
  MdCheck,
  MdDelete,
  MdEdit,
  // MdFavorite,
  MdFavoriteBorder,
  MdUndo,
} from "react-icons/md";

import * as S from "./styles";
import { remover, editar } from "../../store/reducers/contatos";
import ContatoClass from "../../models/Contato";

type Props = ContatoClass;

const Contato = ({
  apelido: apelidoOriginal,
  nome: nomeOriginal,
  numero: numeroOriginal,
  email: emailOriginal,
  status,
  categoria,
  id,
}: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [apelido, setApelido] = useState("");
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal);
    }
  }, [nomeOriginal]);

  useEffect(() => {
    if (apelidoOriginal.length > 0) {
      setApelido(apelidoOriginal);
    }
  }, [apelidoOriginal]);

  useEffect(() => {
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal);
    }
  }, [numeroOriginal]);

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal);
    }
  }, [emailOriginal]);

  function cancelarEdicao() {
    setEstaEditando(false);
    setApelido(apelidoOriginal);
    setEmail(emailOriginal);
    setNome(nomeOriginal);
    setNumero(numeroOriginal);
  }

  return (
    <S.Card>
      <S.Pessoa>
        <S.Avatar src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" />
        <div>
          <S.Nome
            disabled={!estaEditando}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <S.Apelido
            disabled={!estaEditando}
            value={apelido}
            onChange={(e) => setApelido(e.target.value)}
          />
        </div>
      </S.Pessoa>
      <S.Numero
        as={IMaskInput}
        mask={"(00)0000-0000"}
        disabled={!estaEditando}
        value={numero}
        onChange={(e) => setNumero((e.target as HTMLInputElement).value)}
      />
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Save
              onClick={() => {
                dispatch(
                  editar({
                    apelido,
                    nome,
                    numero,
                    email,
                    categoria,
                    status,
                    id,
                  })
                );
                setEstaEditando(false);
              }}
            >
              <MdCheck />
            </S.Save>
            <S.Undo onClick={cancelarEdicao}>
              <MdUndo />
            </S.Undo>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>
              <MdEdit />
            </S.Botao>
            <S.Remove onClick={() => dispatch(remover(id))}>
              <MdDelete />
            </S.Remove>
          </>
        )}

        <S.Favorite>
          <MdFavoriteBorder />
        </S.Favorite>
      </S.BarraAcoes>
    </S.Card>
  );
};
export default Contato;

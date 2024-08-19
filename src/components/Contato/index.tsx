import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  MdCheck,
  MdDelete,
  MdEdit,
  // MdFavorite,
  MdFavoriteBorder,
  MdUndo,
} from "react-icons/md";

import * as S from "./styles";
import { remover } from "../../store/reducers/contatos";
import ContatoClass from "../../models/Contato";

type Props = ContatoClass;

const Contato = ({ apelido, nome, numero, email, id }: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);

  return (
    <S.Card>
      <S.Pessoa>
        <S.Avatar src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" />
        <div>
          <S.Nome value={nome} />
          <S.Apelido value={apelido} />
        </div>
      </S.Pessoa>
      <S.Numero value={numero} />
      <S.Email value={email} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Save onClick={() => setEstaEditando(false)}>
              <MdCheck />
            </S.Save>
            <S.Undo>
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

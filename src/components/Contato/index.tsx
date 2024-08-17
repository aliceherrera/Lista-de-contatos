import { useState } from "react";
import { MdCheck, MdDelete, MdEdit, MdFavorite, MdUndo } from "react-icons/md";
import * as S from "./styles";

type Props = {
  nome: string;
  apelido: string;
  numero: number;
  email: string;
};

const Contato = ({ apelido, nome, numero, email }: Props) => {
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
            <S.Edit onClick={() => setEstaEditando(true)}>
              <MdEdit />
            </S.Edit>
            <S.Remove>
              <MdDelete />
            </S.Remove>
          </>
        )}

        <S.Favorite>
          <MdFavorite />
        </S.Favorite>
      </S.BarraAcoes>
    </S.Card>
  );
};
export default Contato;

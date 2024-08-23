import { useDispatch } from "react-redux";
import * as S from "./styles";
import { alteraFiltro } from "../../store/reducers/filtros";
import * as enums from "../../utils/enums/Categoria";

export type Props = {
  ativo?: boolean;
  icone?: any;
  categoria: string;
  criterio: "categoria" | "favorito" | "todos";
  valor?: enums.Status | enums.Categoria;
};

const FiltroCard = ({ ativo, icone, categoria, criterio, valor }: Props) => {
  const dispatch = useDispatch();

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor,
      })
    );
  };

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Icon>{icone}</S.Icon>
      <S.Label> {categoria}</S.Label>
    </S.Card>
  );
};

export default FiltroCard;

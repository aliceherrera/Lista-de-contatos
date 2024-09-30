import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { alteraFiltro } from "../../store/reducers/filtros";
import * as enums from "../../utils/enums/Categoria";
import { RootReducer } from "../../store";

export type Props = {
  icone?: any;
  categoria: string;
  criterio: "categoria" | "status" | "todos";
  valor?: enums.Status | enums.Categorias;
};

const FiltroCard = ({ icone, categoria, criterio, valor }: Props) => {
  const dispatch = useDispatch();
  const { filtro } = useSelector((state: RootReducer) => state);

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio;
    const mesmoValor = filtro.valor === valor;

    return mesmoCriterio && mesmoValor;
  };

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor,
      })
    );
  };

  const ativo = verificaEstaAtivo();

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Icon>{icone}</S.Icon>
      <S.Label> {categoria}</S.Label>
    </S.Card>
  );
};

export default FiltroCard;

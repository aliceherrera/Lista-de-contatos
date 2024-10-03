import { useDispatch, useSelector } from "react-redux";
import {
  MdArrowBackIos,
  MdFavorite,
  MdHouse,
  MdInsertEmoticon,
  MdLabel,
  MdMoreHoriz,
  MdWork,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

import FiltroCard from "../../components/FiltroCard";
import * as S from "./styles";
import { RootReducer } from "../../store";
import { alteraTermo } from "../../store/reducers/filtros";
import * as enums from "../../utils/enums/Categoria";

type Props = {
  mostrarFiltros: boolean;
};

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { termo } = useSelector((state: RootReducer) => state.filtro);

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <S.Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                criterio="todos"
                icone={<MdLabel />}
                categoria="Todos"
              />
              <FiltroCard
                valor={enums.Status.FAVORITO}
                criterio="status"
                icone={<MdFavorite />}
                categoria="Favoritos"
              />
              <FiltroCard
                valor={enums.Categorias.TRABALHO}
                criterio="categoria"
                icone={<MdWork />}
                categoria="Trabalho"
              />
              <FiltroCard
                valor={enums.Categorias.FAMILIA}
                criterio="categoria"
                icone={<MdHouse />}
                categoria="Família"
              />
              <FiltroCard
                valor={enums.Categorias.AMIGOS}
                criterio="categoria"
                icone={<MdInsertEmoticon />}
                categoria="Amigos"
              />
              <FiltroCard
                valor={enums.Categorias.OUTROS}
                criterio="categoria"
                icone={<MdMoreHoriz />}
                categoria="Outros"
              />
            </S.Filtros>
          </>
        ) : (
          <S.Voltar type="button" onClick={() => navigate("/")}>
            <MdArrowBackIos /> Voltar para contatos
          </S.Voltar>
        )}
      </div>
    </S.Aside>
  );
};

export default BarraLateral;

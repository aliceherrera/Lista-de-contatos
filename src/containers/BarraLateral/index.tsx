import { useDispatch, useSelector } from "react-redux";
import FiltroCard from "../../components/FiltroCard";
import * as S from "./styles";
import { MdFavorite, MdHouse, MdLabel, MdWork } from "react-icons/md";
import { RootReducer } from "../../store";
import { alteraTermo } from "../../store/reducers/filtros";
import * as enums from "../../utils/enums/Categoria";

const BarraLateral = () => {
  const dispatch = useDispatch();
  const { termo } = useSelector((state: RootReducer) => state.filtro);

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard criterio="todos" icone={<MdLabel />} categoria="Todos" />
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
        </S.Filtros>
      </div>
    </S.Aside>
  );
};

export default BarraLateral;

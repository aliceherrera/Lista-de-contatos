import FiltroCard from "../../components/FiltroCard";
import * as S from "./styles";
import { MdFavorite, MdHouse, MdLabel, MdWork } from "react-icons/md";

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard ativo icone={<MdLabel />} categoria="Todos" />
        <FiltroCard icone={<MdFavorite />} categoria="Favoritos" />
        <FiltroCard icone={<MdWork />} categoria="Trabalho" />
        <FiltroCard icone={<MdHouse />} categoria="Família" />
      </S.Filtros>
    </div>
  </S.Aside>
);

export default BarraLateral;

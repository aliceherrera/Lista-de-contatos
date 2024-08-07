import * as S from "./styles";

export type Props = {
  ativo?: boolean;
  icone?: any;
  categoria: string;
};

const FiltroCard = ({ ativo, icone, categoria }: Props) => (
  <S.Card ativo={ativo}>
    <S.Icon>{icone}</S.Icon>
    <S.Label> {categoria}</S.Label>
  </S.Card>
);

export default FiltroCard;

import * as S from "./styles";

export type Props = {
  ativo?: boolean;
};

const FiltroCard = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.Label>* Todos</S.Label>
  </S.Card>
);

export default FiltroCard;

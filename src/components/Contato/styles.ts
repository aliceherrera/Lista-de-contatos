import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Card = styled.div`
  color: ${variaveis.cinzaClaro};
  display: grid;
  grid-template-columns: 3fr 1fr 2fr 1fr;
  margin: 0 40px;
  padding: 16px;
  border-radius: 14px;
  align-items: start;

  &:hover {
    background-color: ${variaveis.cinzaMedio2};
  }
`;

export const Pessoa = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 55px;
  width: 55px;
`;

export const Nome = styled.input`
  font-size: 24px;
  margin-left: 16px;
  margin-right: 16px;
  padding-left: 4px;
  font-weight: 400;
  color: ${variaveis.branco};
  background: none;
  border: none;
`;

export const Apelido = styled.input`
  color: ${variaveis.cinzaClaro};
  font-size: 16px;
  font-style: italic;
  margin-left: 16px;
  margin-right: 16px;
  padding-left: 4px;
  background: none;
  border: none;
`;

export const Numero = styled.input`
  font-size: 18px;
  padding-left: 4px;
  margin-right: 16px;
  color: ${variaveis.branco};
  background: none;
  border: none;
`;

// export const Numero = styled.div`
//   font-size: 18px;
//   padding-left: 4px;
//   margin-right: 16px;
//   color: ${variaveis.branco};
//   background: none;
//   border: none;
// `;

export const Email = styled.input`
  font-size: 18px;
  padding-left: 4px;
  margin-right: 16px;
  color: ${variaveis.branco};
  background: none;
  border: none;
`;

export const BarraAcoes = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
`;

export const Botao = styled.button`
  border: none;
  background: none;
  color: ${variaveis.cinzaClaro};
  &:hover {
    transform: scale(1.2);
  }
`;

export const Save = styled(Botao)`
  color: ${variaveis.verde};
`;

export const Remove = styled(Botao)`
  margin-left: 20px;
  color: ${variaveis.vermelho};
`;

export const Undo = styled(Botao)`
  margin-left: 20px;
`;

export const Favorite = styled(Botao)`
  margin-left: 20px;
`;

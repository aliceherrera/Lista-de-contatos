import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Container = styled.div`
  padding: 0 40px;
  font-size: 18px;
  color: ${variaveis.cinzaClaro};
`;

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 16px;
  background-color: ${variaveis.cinzaEscuro};
  color: ${variaveis.branco};
  border: none;
  padding: 8px 16px;
  border-radius: 14px;
  max-width: 400px;

  &:focus {
    background-color: ${variaveis.cinzaMedio2};
    color: ${variaveis.branco};
  }
`;

export const Categoria = styled.div`
  margin-bottom: 16px;
  display: flex;
`;

export const Frase = styled.p`
  padding-right: 8px;
`;

export const Label = styled.label`
  padding: 0 8px;
`;

export const BotaoSalvar = styled.button`
  background-color: ${variaveis.cinzaMedio2};
  color: ${variaveis.branco};
  font-size: 18px;
  font-weight: bold;
  padding: 8px 14px;
  border-radius: 14px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${variaveis.cinzaEscuro};
  }
`;

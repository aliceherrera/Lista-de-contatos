import styled from "styled-components";

export const Card = styled.div`
  color: #fff;
  display: grid;
  grid-template-columns: 3fr 1fr 2fr 1fr;
  margin: 0 40px;
  padding: 16px;
  border-radius: 14px;
  align-items: start;

  &:hover {
    background-color: #494949;
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
  color: #fff;
  background: none;
  border: none;
`;

export const Apelido = styled.input`
  color: #a1a1a1;
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
  color: #fff;
  background: none;
  border: none;
`;

export const Email = styled.input`
  font-size: 18px;
  padding-left: 4px;
  margin-right: 16px;
  color: #fff;
  background: none;
  border: none;
`;

export const BarraAcoes = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
`;

export const Edit = styled.button`
  color: #d9d9d9;
  border: none;
  background: none;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Save = styled.button`
  color: #14df41;
  border: none;
  background: none;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Remove = styled.button`
  margin-left: 20px;
  color: #e34545;
  background: none;
  border: none;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Undo = styled.button`
  margin-left: 20px;
  color: #d9d9d9;
  background: none;
  border: none;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Favorite = styled.button`
  margin-left: 20px;
  color: #d9d9d9;
  background: none;
  border: none;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Botao = styled.button``;

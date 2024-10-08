import styled from "styled-components";

type Props = {
  ativo: boolean;
};

export const Card = styled.div<Props>`
  padding: 8px;
  background-color: ${(props) => (props.ativo ? "#7f7f7f" : "none")};
  color: ${(props) => (props.ativo ? "#fff" : "#d9d9d9")};
  border-radius: 14px;
  font-weight: ${(props) => (props.ativo ? "bold" : "regular")};
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 20px;
  padding: 14px 16px;
  cursor: pointer;
`;

export const Icon = styled.span`
  font-size: 20px;
  padding-left: 30px;
`;

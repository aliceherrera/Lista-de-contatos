import styled from "styled-components";

import { Props } from ".";

export const Card = styled.div<Props>`
  padding: 8px;
  background-color: ${(props) => (props.ativo ? "#7f7f7f" : "none")};
  color: ${(props) => (props.ativo ? "#fff" : "#d9d9d9")};
  border-radius: 14px;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 20px;
  padding: 14px 30px;
`;

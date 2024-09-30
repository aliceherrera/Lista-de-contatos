import { Link } from "react-router-dom";
import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const BotaoNovo = styled(Link)`
  display: block;
  background-color: ${variaveis.cinzaMedio2};
  color: ${variaveis.branco};
  font-size: 18px;
  font-weight: bold;
  position: fixed;
  padding: 8px 14px;
  bottom: 40px;
  right: 40px;
  border-radius: 14px;
  cursor: pointer;
  text-decoration: none;
`;

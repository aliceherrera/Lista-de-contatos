import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        list-style: none;
    }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 344px auto;
`;

export const MainContainer = styled.main`
  background-color: #3a3a3a;
`;

export const Titulo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 80px 40px 40px 56px;
  color: #d9d9d9;
`;

export default EstiloGlobal;

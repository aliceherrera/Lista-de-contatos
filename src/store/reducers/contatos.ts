import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

type ContatosState = {
  itens: Contato[];
};

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: "Camila Zanneti",
      apelido: "mila",
      numero: 11999999999,
      email: "camili.z@gmail.com",
    },
    {
      id: 2,
      nome: "Eduarda Marques",
      apelido: "folgada",
      numero: 11999999999,
      email: "afolgadadovalorant@gmail.com",
    },
    {
      id: 3,
      nome: "Gustavo Fernandes",
      apelido: "gusta",
      numero: 11999999999,
      email: "fer_gusta@gmail.com",
    },
    {
      id: 4,
      nome: "Ricardo Assan",
      apelido: "ryca",
      numero: 11999999999,
      email: "rycaassan@gmail.com",
    },
  ],
};

const contatosSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      );
    },
  },
});

export const { remover } = contatosSlice.actions;

export default contatosSlice.reducer;

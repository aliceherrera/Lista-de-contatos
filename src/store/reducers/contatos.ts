import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";
import * as enums from "../../utils/enums/Categoria";

type ContatosState = {
  itens: Contato[];
};

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: "Camila Zanneti",
      apelido: "mila",
      numero: "11999999999",
      email: "camili.z@gmail.com",
      categoria: enums.Categorias.FAMILIA,
    },
    {
      id: 2,
      nome: "Eduarda Marques",
      apelido: "folgada",
      numero: "11999999999",
      email: "afolgadadovalorant@gmail.com",
      status: enums.Status.FAVORITO,
      categoria: enums.Categorias.FAMILIA,
    },
    {
      id: 3,
      nome: "Gustavo Fernandes",
      apelido: "gusta",
      numero: "11999999999",
      email: "fer_gusta@gmail.com",
      status: enums.Status.FAVORITO,
      categoria: enums.Categorias.FAMILIA,
    },
    {
      id: 4,
      nome: "Ricardo Assan",
      apelido: "ryca",
      numero: "11999999999",
      email: "rycaassan@gmail.com",
      status: enums.Status.FAVORITO,
    },
    {
      id: 5,
      nome: "Jennifer Lis",
      apelido: "Lis",
      numero: "11999999999",
      email: "jenniferlis@gmail.com",
      status: enums.Status.FAVORITO,
      categoria: enums.Categorias.TRABALHO,
    },
    {
      id: 6,
      nome: "Sueli Rosana",
      apelido: "soei",
      numero: "11999999999",
      email: "suelirosana@gmail.com",
      categoria: enums.Categorias.TRABALHO,
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
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      );

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLocaleLowerCase() ===
          action.payload.nome.toLocaleLowerCase()
      );

      if (contatoJaExiste) {
        alert("Já existe um contato com esse nome");
      } else {
        state.itens.push(action.payload);
      }
    },
  },
});

export const { remover, editar, cadastrar } = contatosSlice.actions;

export default contatosSlice.reducer;

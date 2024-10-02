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
      status: enums.Status.NAOFAVORITO,
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
      categoria: enums.Categorias.AMIGOS,
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
      status: enums.Status.NAOFAVORITO,
      categoria: enums.Categorias.OUTROS,
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
    cadastrar: (state, action: PayloadAction<Omit<Contato, "id">>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLocaleLowerCase() ===
          action.payload.nome.toLocaleLowerCase()
      );

      if (contatoJaExiste) {
        alert("Já existe um contato com esse nome");
      } else {
        const ultimoContato = state.itens[state.itens.length - 1];
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1,
        };
        state.itens.push(contatoNovo);
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; favorito: boolean }>
    ) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      );

      if (indexDoContato >= 0) {
        state.itens[indexDoContato].status = action.payload.favorito
          ? enums.Status.FAVORITO
          : enums.Status.NAOFAVORITO;
      }
    },
  },
});

export const { remover, editar, cadastrar, alteraStatus } =
  contatosSlice.actions;

export default contatosSlice.reducer;

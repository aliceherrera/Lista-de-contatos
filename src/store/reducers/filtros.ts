import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as enums from "../../utils/enums/Categoria";
import { act } from "react";

type filtroState = {
  termo?: string;
  criterio: "categoria" | "favorito" | "todos";
  valor?: enums.Categoria | enums.Status;
};

const initialState: filtroState = {
  termo: "",
  criterio: "todos",
};

const filtroSlice = createSlice({
  name: "filtro",
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload;
    },
    alteraFiltro: (state, action: PayloadAction<filtroState>) => {
      state.criterio = action.payload.criterio;
      state.valor = action.payload.valor;
    },
  },
});

export const { alteraTermo, alteraFiltro } = filtroSlice.actions;

export default filtroSlice.reducer;

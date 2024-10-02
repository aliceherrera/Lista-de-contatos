import * as enums from "../utils/enums/Categoria";

class Contato {
  nome: string;
  apelido: string;
  numero: any;
  email: string;
  id: number;
  status: enums.Status;
  categoria: enums.Categorias;

  constructor(
    nome: string,
    apelido: string,
    numero: any,
    email: string,
    status: enums.Status,
    categoria: enums.Categorias,
    id: number
  ) {
    this.nome = nome;
    this.apelido = apelido;
    this.numero = numero;
    this.email = email;
    this.status = status;
    this.categoria = categoria;
    this.id = id;
  }
}

export default Contato;

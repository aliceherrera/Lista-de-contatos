class Contato {
  nome: string;
  apelido: string;
  numero: any;
  email: string;
  id: number;

  constructor(
    nome: string,
    apelido: string,
    numero: any,
    email: string,
    id: number
  ) {
    this.nome = nome;
    this.apelido = apelido;
    this.numero = numero;
    this.email = email;
    this.id = id;
  }
}

export default Contato;

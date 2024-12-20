import { randomUUID } from "node:crypto";
import { sql } from "./db.js";
import { criar } from './scripts-bd/criar-tabela-usuario.js';

await criar()
export class DatabasePostgres {
  

  async list(search) {
    let usuarios;

    if (search) {
      usuarios = await sql`select * from usuarios where nome ilike ${
        "%" + search + "%"
      }`;
    } else {
      usuarios = await sql`select * from usuarios`;
    }

    return usuarios;
  }

  async create(usuario) {
    const usuarioId = randomUUID();
    const { nome, email, telefone, endereco } = usuario;

    await sql`insert into usuarios (id, nome, email, telefone, endereco) VALUES (${usuarioId}, ${nome}, ${email}, ${telefone}, ${endereco})`;
  }

  async update(id, usuario) {
    const { nome, email, telefone, endereco } = usuario;

    await sql`update usuarios set nome = ${nome}, email = ${email}, telefone = ${telefone}, endereco= ${endereco} WHERE id = ${id}`;
  }

  async delete(id) {
    await sql`delete from usuarios where id = ${id}`;
  }
}

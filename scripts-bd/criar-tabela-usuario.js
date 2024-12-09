import { sql } from "../db.js"



export async function criar(){

  // try {
  //   await sql`
  //     DROP TABLE IF EXISTS usuarios;
  //   `
  //   console.log("Tabela apagada")
  // } catch (error) {
  //   console.log(error)

  // }


  try {
    await sql`
      CREATE TABLE if not exists usuarios (
        id      VARCHAR(50)  PRIMARY KEY,
        nome    VARCHAR(100),
        email   VARCHAR(150),
        telefone VARCHAR(15),
        endereco VARCHAR(200)
      );
    `
    console.log("Tabela criada")
  } catch (error) {
    console.log(error)

  }



}

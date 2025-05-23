import { mongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const client = new mongoClient(url);

export default class usuarios {

    constructor(nome, idade, administrador){
        this.nome = nome;
        this.idade = idade;
        this.administrador = administrador;
    }

    async add(){
        try{
            await client.connect();

            const db = client.db('db3B');

            const collection = db.collection('users');

            const insertresult = await collection.insertOne({nome: 'this.nome, idade: this.idade, admin: this.administrador'})

            return insertresult;
        } catch (error){
            return 'erro durante a requisição do banco: ${error}';
        } finally {
            //fecha conexão
            client.close();
        }
    }
}
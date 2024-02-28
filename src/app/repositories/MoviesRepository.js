import { consulta } from "../database/connection.js";

class MoviesRepository {
    create(movie) {
        const sql = 'INSERT INTO movies (nome, genero, resumo) values ($1, $2, $3)'
        return consulta(sql, [movie.nome, movie.genero, movie.resumo], "Não foi possivel cadastrar")
    }

    findAll() {
        const sql = 'SELECT * FROM movies'
        return consulta(sql, '', "Não foi possivel encontrar")
    }

    findById(id) {
        const sql = 'SELECT * FROM movies WHERE id=$1'
        return consulta(sql, [id], "Não foi possivel encontrar o filme")
    }

    update(id, movie) {
        const sql = 'UPDATE movies SET nome = $1, genero = $2, resumo = $3 WHERE id = $4'
        return consulta(sql, [movie.nome, movie.genero, movie.resumo, id], "Não foi possivel atualizar")
    }

    delete() {
    }
}

export default new MoviesRepository();
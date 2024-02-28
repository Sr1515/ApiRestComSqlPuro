import { consulta } from "../database/connection.js";

class MoviesRepository {
    create(movie) {

    }

    findAll() {
        const sql = 'SELECT * FROM movies'
        return consulta(sql, '', "Não foi possivel encontrar")
    }

    findById(id) {
        const sql = 'SELECT * FROM movies WHERE id=$1'
        return consulta(sql, [id], "Não foi possivel encontrar o filme")
    }

    update() {
    }

    delete() {
    }
}

export default new MoviesRepository();
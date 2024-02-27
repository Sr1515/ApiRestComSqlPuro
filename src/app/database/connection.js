import pg from 'pg'
import 'dotenv/config'

const Client = pg.Client

const pgClient = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

pgClient.connect()

export const consulta = (sql, valores = '', mensagemReject) => {
    return new Promise((resolve, reject) => {
        pgClient.query(sql, valores, (error, result) => {
            if (error) return reject(mensagemReject);

            // fazer o parse dos resultados
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row);
        })
    })
}

export default pgClient;
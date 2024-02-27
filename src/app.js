import express from 'express';
import 'dotenv/config'

const app = express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log(process.env.TESTE)
})

app.listen(port, () => {
    console.log("server running in http://localhost:3000")
})
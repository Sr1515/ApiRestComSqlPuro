import MoviesRepository from '../repositories/MoviesRepository.js'

class MoviesController {

    async index(req, res) {
        try{
            const row = await MoviesRepository.findAll();
            res.json(row.rows)
        } catch (e) {
            res.status(404).send(`Error: ${e}`)
        }
    }

    async show(req, res) {
        try {
            const id = req.params.id
            const row = await MoviesRepository.findById(id)
            res.json(row.rows)
        } catch (e) {
            res.status(400).send(`Error: ${e}`)
        }
    }

    async store(req, res) {
        try {
            const movie = req.body
            const row = await MoviesRepository.create(movie)
            res.json(row)
        } catch (e) {
            res.status(400).send(`Error: ${e}`)
        }
        
    }

    async update(req, res) {
        try {
            const id = req.params.id 
            const movie = req.body
            const row = await MoviesRepository.update(id, movie)
            res.json(row)
        } catch (e) {
            res.status(400).send(`Error: ${e}`)
        }
        
    }

    async delete(req, res) {
        try {
            const id = req.params.id
            const row = await MoviesRepository.delete(id)
            res.json(row)
        } catch (e) {
            res.status(400).send(`Error: ${e}`)
        }
    }

}

export default new MoviesController()
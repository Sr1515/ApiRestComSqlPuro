import MoviesRepository from '../repositories/MoviesRepository.js'

class MoviesController {

    async index(req, res) {
        const row = await MoviesRepository.findAll();
        res.json(row.rows)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await MoviesRepository.findById(id)
        res.json(row.rows)
    }

    async store(req, res) {
        const movie = req.body
        const row = await MoviesRepository.create(movie)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id 
        const movie = req.body
        const row = await MoviesRepository.update(id, movie)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await MoviesRepository.delete(id)
        res.json(row)
    }

}

export default new MoviesController()
import MoviesRepository from '../repositories/MoviesRepository.js'

class MoviesController {

    async index(req, res) {
        const row = await MoviesRepository.findAll();
        res.json(row.rows)
    }

    async show(req, res) {
        const movieId = req.params.id
        const row = await MoviesRepository.findById(movieId)
        res.json(row.rows)
    }
    store() {}
    update() {}
    delete() {}

}

export default new MoviesController()
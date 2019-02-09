const { RESTDataSource } = require('apollo-datasource-rest')

class ComicsAPI extends RESTDataSource {
  constructor() {
    super()

    this.baseURL = 'https://api.shortboxed.com/comics/v1/'
    this.types = {
      new: 'new',
      previous: 'previous',
      future: 'future',
    }
  }

  comicReducer(comic) {
    return {
      ...comic,
      releaseDate: comic.release_date,
      diamondId: comic.diamond_id,
    }
  }

  async getById(id) {
    const { comics = [] } = await this.get(`diamond_id/${id}`)
    return comics[0] ? this.comicReducer(comics[0]) : null
  }

  async getByType(type = this.types.new) {
    const { comics = [] } = await this.get(type)
    return comics.map(this.comicReducer)
  }

  async getByReleaseDate(releaseDate) {
    try {
      const { comics = [] } = await this.get(`release_date/${releaseDate}`)
      return comics.map(this.comicReducer)
    } catch (e) {
      return null
    }
  }

  async getAllReleases() {
    const { dates = [] } = await this.get('releases/available')
    return dates
  }

  async search(args = {}) {
    try {
      const { comics = [] } = await this.get('query', args)
      return comics.map(this.comicReducer)
    } catch (e) {
      return null
    }
  }
}

module.exports = ComicsAPI

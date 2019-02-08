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

  async getAll(type = this.types.new) {
    const { comics = [] } = await this.get(type)
    return comics
  }

  async getByReleaseDate(releaseDate) {
    try {
      const { comics = [] } = await this.get(`release_date/${releaseDate}`)
      return comics
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
      return comics
    } catch (e) {
      return null
    }
  }
}

module.exports = ComicsAPI

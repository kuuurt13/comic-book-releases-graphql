const { RESTDataSource } = require('apollo-datasource-rest')

class ComicsAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.shortboxed.com/comics/v1/'
  }

  async getAllNewComics() {
    const { comics = [] } = await this.get('new')
    return comics
  }
}

module.exports = ComicsAPI

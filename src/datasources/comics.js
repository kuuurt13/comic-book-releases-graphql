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
}

module.exports = ComicsAPI

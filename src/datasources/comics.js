const { RESTDataSource } = require('apollo-datasource-rest')

class ComicsAPI extends RESTDataSource {
  constructor() {
    super()

    this.baseURL = 'https://api.shortboxed.com/comics/v1/'
    this.imageURL = 'https://d2lzb5v10mb0lj.cloudfront.net/covers_tfaw/400/'
    this.types = {
      new: 'new',
      previous: 'previous',
      future: 'future',
    }
  }

  comicsReducer(comics) {
    return comics.map(({ diamond_id, ...comic }) => {
      const urlPrefix = diamond_id.slice(0, 2)

      return {
        ...comic,
        diamond_id,
        cover_image: `${this.imageURL}${urlPrefix}/${diamond_id}.jpg`,
      }
    })
  }

  async getAll(type = this.types.new) {
    const { comics = [] } = await this.get(type)
    return this.comicsReducer(comics)
  }

  async search(args = {}) {
    try {
      const { comics = [] } = await this.get('query', args)
      return this.comicsReducer(comics)
    } catch (e) {
      return null
    }
  }
}

module.exports = ComicsAPI

module.exports = {
  Query: {
    new: (_, __, { dataSources }) => dataSources.comicsAPI.getAll(),

    previous: (_, __, { dataSources }) => {
      const { comicsAPI } = dataSources
      return comicsAPI.getAll(comicsAPI.types.previous)
    },

    future: (_, __, { dataSources }) => {
      const { comicsAPI } = dataSources
      return comicsAPI.getAll(comicsAPI.types.future)
    },

    search: (_, args, { dataSources }) => {
      const { comicsAPI } = dataSources
      return comicsAPI.search(args)
    },

    releaseDate: (_, { release_date }, { dataSources }) => {
      const { comicsAPI } = dataSources
      return comicsAPI.getByReleaseDate(release_date)
    },
  },
}

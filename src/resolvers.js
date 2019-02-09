module.exports = {
  Query: {
    comic: (_, { diamondId }, { dataSources }) =>
      dataSources.comicsAPI.getById(diamondId),

    new: (_, __, { dataSources }) => dataSources.comicsAPI.getByType(),

    previous: (_, __, { dataSources }) => {
      const { comicsAPI } = dataSources
      return comicsAPI.getByType(comicsAPI.types.previous)
    },

    future: (_, __, { dataSources }) => {
      const { comicsAPI } = dataSources
      return comicsAPI.getByType(comicsAPI.types.future)
    },

    search: (_, args, { dataSources }) => {
      const { comicsAPI } = dataSources
      return comicsAPI.search(args)
    },

    releaseDate: (_, { release_date }, { dataSources }) => {
      const { comicsAPI } = dataSources
      return comicsAPI.getByReleaseDate(release_date)
    },

    releases: (_, __, { dataSources }) => {
      const { comicsAPI } = dataSources
      return comicsAPI.getAllReleases()
    },
  },
}

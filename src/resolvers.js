module.exports = {
  Query: {
    comics: async (_, __, { dataSources }) =>
      dataSources.comicsAPI.getAllNewComics(),
  },
}

const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const ComicsAPI = require('./datasources/comics')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    comicsAPI: new ComicsAPI(),
  }),
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})

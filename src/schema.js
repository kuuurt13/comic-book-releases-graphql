const { gql } = require('apollo-server')

const typeDefs = gql`
  type Comic {
    publisher: String
    description: String
    title: String
    price: String
    creators: String
    releaseDate: String
    diamondId: String
  }

  type Query {
    new: [Comic]!
    previous: [Comic]!
    future: [Comic]!
    releaseDate(releaseDate: String!): [Comic]
    releases: [String]!
    comic(diamondId: String): Comic
    search(
      releaseDate: String
      publisher: String
      title: String
      creators: String
    ): [Comic]
  }
`

module.exports = typeDefs

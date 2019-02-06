const { gql } = require('apollo-server')

const typeDefs = gql`
  type Comic {
    publisher: String
    description: String
    title: String
    price: String
    creators: String
    release_date: String
    diamond_id: String
    cover_image: String
  }

  type Query {
    new: [Comic]!
    previous: [Comic]!
    future: [Comic]!
    search(
      release_date: String
      publisher: String
      title: String
      creators: String
    ): [Comic]
  }
`

module.exports = typeDefs

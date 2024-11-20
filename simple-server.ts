import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }

  # type Mutation{}
`

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      helloWorld: () => 'Hello World',
    },
  },
})

server.listen().then(({ url }) => console.log(`Server running on ${url}`))

const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        me: User
    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        _id: ID
        bookId: String!
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(_id: ID, authors: [String], description: String, title: String!, bookId: String, image: String, link: String): User
        removeBook(bookId: String!): User
    }
`

module.exports = typeDefs
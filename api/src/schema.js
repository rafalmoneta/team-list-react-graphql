const { gql } = require('apollo-server')

const typeDefs = gql`

  enum SportType {
    FOOTBALL
    BASKETBALL
    ESPORT
  }

  type Team {
    id: ID!
    name: String!
    sport: SportType!
    createdAt: Int!
    img: String
  }

  input NewTeamInput {
    name: String!
    sport: SportType!
    img: String
  }

  input TeamInput {
    sport: SportType!
  }

  type Query {
    teams(input: TeamInput): [Team]!
  }

  type Mutation {
    addTeam(input: NewTeamInput!): Team!
  }
`;

module.exports = typeDefs

module.exports = {
  
  Query: {
    teams(_, {input}, {models}) {
      return models.Team.findMany( input || {})
    }
  },
  Mutation: {
    addTeam(_, {input}, {models}) {
      const team = models.Team.create(input)
      return team
    }
  }

}

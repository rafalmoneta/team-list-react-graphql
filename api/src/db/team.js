const nanoid = require('nanoid')

const createTeamModel = db => {
  return {
    findMany(filter) {
      return db.get('team')
        .filter(filter)
        .orderBy(['createdAt'], ['desc'])
        .value()
    },

    findOne(filter) {
      return db.get('team')
        .find(filter)
        .value()
    },

    create(team) {
      const newTeam = {id: nanoid(), createdAt: Date.now(), ...team}
      
      db.get('team')
        .push(newTeam)
        .write()

      return newTeam
    }
  }
}

module.exports = createTeamModel
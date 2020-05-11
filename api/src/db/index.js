const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('api/src/db/db.json')
const db = low(adapter)

const createTeamModel = require('./team')

module.exports = {
  models: {
    Team: createTeamModel(db),
  },
  db
}

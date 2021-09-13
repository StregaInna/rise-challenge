const express = require('express')
const morgan = require('morgan')
const db = require('./dataBase')
// we'll just use some variables as the "database" to get started


function server() {
  const app = express()
  const port = process.env.PORT || 5000

  app.use(morgan('dev'))

  app.get('/knowledge-check-blocks', (req, res) => res.send(db.knowledgeCheckBlocks))

  app.start = app.listen.bind(app, port, () => console.log(`Listening on port ${port}`))

  return app
}

if (require.main === module) server().start()

module.exports = server

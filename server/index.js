const express = require('express')
const morgan = require('morgan')
const db = require('./dataBase')
// I moved the "database" to another file (./dataBase.js) because I find smaller, more moduler files easier to read


function server() {
  const app = express()
  const port = process.env.PORT || 5000

  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.get('/knowledge-check-blocks', (req, res) => res.send(db.knowledgeCheckBlocks))
  app.get('/form-state', (req, res) => res.send(db.formState)) 
  //in a case with multiple users/courses, this API route would include more information on which user/course we are loading state for
  app.put('/update-form-state', (req, res, next) => {
    try {
      db.formState = req.body[0]
      res.send(db.formState)
    } catch(error)
      {next(error)}
  })

  app.start = app.listen.bind(app, port, () => console.log(`Listening on port ${port}`))

  return app
}

if (require.main === module) server().start()

module.exports = server

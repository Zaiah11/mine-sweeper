module.exports = (/*options*/) => {
  const bodyParser = require('body-parser')
  const {generateNewMap} = require('./mapMaker')
  const app = require('express')()
    
  app.use(bodyParser.json())

  app.post('/new/map', (req, res) => {        
    const map = generateNewMap(req.body.size)
    res.status(200).send(map)
  })

  return app
}

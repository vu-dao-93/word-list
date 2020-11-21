const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router()
const MongoClient = require('mongodb').MongoClient;

const getWordList = require('./server/getWordList');
const addWordMany = require('./server/addWordMany');
const deleteWordMany = require('./server/deleteWordMany');
const URL = 'mongodb+srv://admin:admin@word-list.zubgu.mongodb.net/word-list?retryWrites=true&w=majority'

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: true
}))

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type');

  (req.method === 'OPTIONS')? res.sendStatus(200): next()
})

MongoClient.connect(URL, (err, client) => {
  const db = client.db('word-list');
  console.log('Connected to mongodb server');
  const collection = db.collection('documents')

  router.get('/words', (req, res) => {
    getWordList(collection, +req.query.length, req.query.start).then(result => {
      res.send(result);
    }).catch(err => {
      res.status(err.status).send(err.message)
    })
  })

  router.post('/words', (req, res) => {
    addWordMany(collection, req.body).then(result => {
      res.send(result);
    }).catch(err => {
      res.status(err.status).send(err.message)
    })
  })

  router.post('/words/delete', (req, res) => {
    console.log();
    deleteWordMany(collection, req.body).then(result => {
      res.send(result)
    }).catch(err => {
      res.status(err.status).send(err.message)
    })
  })

})

app.use(express.static(__dirname + '/build'))
app.use('/api', router)

app.listen(8000, () => {
  console.log('listening to app at port ' + 8000);
})

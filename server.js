const express = require('express');
const bodyParser = require('body-parser');
const getWordList = require('./getWordList');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type');

  (req.method === 'OPTIONS')? res.sendStatus(200): next()
})

app.use(express.static(__dirname + '/build'))

app.get('/word-list', (req, res) => {
  getWordList(+req.query.length, req.query.start, (wordList) => {
    res.send(wordList);
  })

})

app.listen(8000, () => {
  console.log('listening to app at port ' + 8000);
})

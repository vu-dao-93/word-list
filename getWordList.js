const fs = require('fs');
const readline = require('readline');

module.exports = (length, start, callback) => {
  let lastId = '';
  let output = [];
  const lineReader = readline.createInterface({
    input: fs.createReadStream('wordList.json')
  })
  lineReader.on('line', (line) => {
    if (start && lastId !== start) {
      lastId = line.substr(8, 3)
      return;
    }
    if (start && lastId === start) {
      output.push(JSON.parse(line))
    }
    if (!start) {
      output.push(JSON.parse(line))
    }
    if (output.length === length) {
      lineReader.close()
    }
  }).on('close', () => {
    callback(output)
  })
}

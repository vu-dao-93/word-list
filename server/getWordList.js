const ObjectId = require('mongodb').ObjectId;

module.exports = (collection, length, start) => {
  console.log(length, start);
  let query = {}
  // TODO: Handle wrong start format
  if (start && start.match(/^[a-fA-F0-9]{24}$/)) {
    collection.createIndex({ _id: 1})
    query = { _id: { $gt: ObjectId(start) } }
  }
  return collection.find(query).limit(+length).toArray().then(docs => {
    console.log('Found the following records');
    console.log(docs);
    return (docs)
  }).catch(err => {
    console.log(err);
    throw err
  })
}

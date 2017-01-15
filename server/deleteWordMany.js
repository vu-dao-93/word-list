const ObjectId = require('mongodb').ObjectId;

module.exports = (collection, query) => {
  console.log(query);
  const idList = query.map(item => ObjectId(item))
  return collection.deleteMany({_id: { $in: idList } }).then(result => {
    console.log('Deleted ' + result.deletedCount + ' records');
    return result
  }).catch(err => {
    console.log(err);
    throw err
  })
}

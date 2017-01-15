module.exports = (collection, data) => {
  console.log(data);
  return collection.insertMany(data).then(result => {
    console.log('Inserted ' + result.ops.length + ' documents into collection');
    return result
  }).catch(err => {
    console.log(err);
    throw err
  })
}

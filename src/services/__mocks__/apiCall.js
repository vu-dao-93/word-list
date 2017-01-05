const rows = [
  {"id": "001", "word": "Hedgehog", "pickRate": 0.5, "successRate": 0.9, "points": 2},
  {"id": "002", "word": "Civil War", "pickRate": 0.8, "successRate": 0.8, "points": 3},
  {"id": "003", "word": "Stanta Claus", "pickRate": 0.2, "successRate": 0.7, "points": 3},
  {"id": "004", "word": "Money pig", "pickRate": 0.4, "successRate": 0.8, "points": 1},
  {"id": "005", "word": "Donald Trump", "pickRate": 0.6, "successRate": 0.4, "points": 2}
]

const apiCall = {
  getWordList: (length, start) => {
    return Promise.resolve(rows)
  }
}

export default apiCall

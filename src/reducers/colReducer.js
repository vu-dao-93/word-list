export default (state = ['word', 'points', 'pickRate', 'successRate'], action) => {
  switch (action.type) {
    case 'COL_SWAP':
      return state.map(col => {
        if (col === action.target) return action.dest
        if (col === action.dest) return action.target
        return col
      })
    default:
      return state
  }
}

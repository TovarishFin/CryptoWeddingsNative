const defaultState = {
  networkName: '',
  networkId: null
}

const reducer = (state = defaultState, action = {}) => {
  const { type, payload } = action

  switch (type) {
    default:
      return state
  }
}

export default reducer

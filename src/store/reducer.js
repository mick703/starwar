const initalState = {
  people: [],
  currentPerson: null,
  currentPageUrl: 'http://swapi.dev/api/people/',
  backPageUrl: null,
  nextPageUrl: 2
}

const reducer = (state = initalState, action) => {
  if (action.type === 'LOAD_PAGE') {
    console.log('LOAD_PAGE')
    console.log(action.payload)
    return {
      ...state,
      currentPageUrl: action.payload.currentPageUrl
    }
  }

  if (action.type === 'SET_PEOPLE') {
    console.log(action.payload)
    return {
      ...state,
      people: action.payload.people
    }
  }

  if (action.type === 'UPDATE_PAGINATOR') {
    return {
      ...state,
      backPageUrl: action.payload.backPageUrl,
      nextPageUrl: action.payload.nextPageUrl
    }
  }
  return state;
};

export default reducer;

import * as starWarActions from '../actions/starwar_actions'

const initalState = {
  people: [],
  currentPerson: null,
  currentPageUrl: 'https://swapi.dev/api/people/',
  backPageUrl: null,
  nextPageUrl: 'https://swapi.dev/api/people/?page=2',
  currentFilmList: []
}

const starWarReducer = (state = initalState, action) => {

  switch (action.type) {
    case starWarActions.LOAD_PAGE:
      return {
        ...state,
        currentPageUrl: action.payload.currentPageUrl
      }
    case starWarActions.SET_PEOPLE:
      return {
        ...state,
        people: action.payload.people
      }
    case starWarActions.UPDATE_PAGINATOR:
      return {
        ...state,
        backPageUrl: action.payload.backPageUrl,
        nextPageUrl: action.payload.nextPageUrl
      }
    case starWarActions.SET_CURRENT_PERSON:
      return {
        ...state,
        currentPerson: action.payload.currentPerson
      }
    case starWarActions.SET_FILMS:
      return {
        ...state,
        currentFilmList: action.payload.currentFilmList
      }

    default:
      return state
  }

};

export default starWarReducer;

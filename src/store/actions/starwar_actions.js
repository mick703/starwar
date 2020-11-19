export const LOAD_PAGE = 'LOAD_PAGE'
export const SET_PEOPLE = 'SET_PEOPLE'
export const UPDATE_PAGINATOR = 'UPDATE_PAGINATOR'
export const LOAD_FILMS = 'LOAD_FILMS'
export const SET_FILMS = 'SET_FILMS'
export const SET_CURRENT_PERSON = 'SET_CURRENT_PERSON'

export const loadPage = (pageUrl) => {
  return (dispatch) => {
    fetch(`${pageUrl}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        dispatch(setPeople(data.results))
        dispatch(updatePaginator(data.previous, data.next))
      })
  }
}

export const setPeople = (people) => {
  return { type: SET_PEOPLE, payload: { people: people } }
}

export const updatePaginator = (backPageUrl, nextPageUrl) => {
  return {
    type: UPDATE_PAGINATOR,
    payload: { backPageUrl: backPageUrl, nextPageUrl: nextPageUrl },
  }
}

export const setCurrentPerson = (person) => {
  return {
    type: SET_CURRENT_PERSON,
    payload: { currentPerson: person },
  }
}

export const setFilms = (films) => {
  return {
    type: SET_FILMS,
    payload: {
      currentFilmList: films,
    },
  }
}

export const loadFilms = (filmUrls) => {
  return (dispatch) => {
    const promises = filmUrls.map((url) => {
      return fetch(url).catch((e) => console.error(e))
    })
    Promise.all(promises)
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((data) => {
        dispatch(setFilms(data))
      })
  }
}

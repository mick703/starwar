import React, { useEffect } from "react";
import { connect } from 'react-redux'
import * as starWarActions from '../store/actions/starwar_actions'

const PeopleList = (props) => {


  useEffect(() => {
    props.onLoadPage(props.currentPageUrl)
  }, [])

  return (
    <div>
      <h2>Table with list of people</h2>
      <table className='list'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
          </tr>
        </thead>
        <tbody>
          {props.people.map((person) =>
            (<tr key={person.name} onClick={() => {
              props.onSelectPerson(person)
              props.onLoadFilms(person.films)
            }}>
              <td>{person.name}</td>
              <td>{person.height}</td>
              <td>{person.mass}</td>
            </tr>)
          )}

        </tbody>
      </table>
      <div className='paginator'>
        {props.backPageUrl ? <button onClick={() => { props.onLoadPage(props.backPageUrl) }} >Back</button> : null}
        <button onClick={() => { props.onLoadPage(props.nextPageUrl) }} >Next</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    currentPageUrl: state.starWar.currentPageUrl,
    people: state.starWar.people,
    backPageUrl: state.starWar.backPageUrl,
    nextPageUrl: state.starWar.nextPageUrl
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadPage: (pageUrl) => dispatch(starWarActions.loadPage(pageUrl)),
    onSetPeople: (people) => dispatch(starWarActions.setPeople(people)),
    onUpdatePaginator: (backPageUrl, nextPageUrl) => dispatch(
      starWarActions.updatePaginator(backPageUrl, nextPageUrl)),
    onSelectPerson: (person) => dispatch(starWarActions.setCurrentPerson(person)),
    onLoadFilms: (filmUrls) => dispatch(starWarActions.loadFilms(filmUrls))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);

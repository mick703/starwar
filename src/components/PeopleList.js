import React, { useEffect } from "react";
import { connect } from 'react-redux'


const PeopleList = (props) => {


  useEffect(() => {

    fetch(`${props.currentPageUrl}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        props.onSetPeople(data.results)
        props.onUpdatePaginator(data.previous, data.next)

      })

  }, [props.currentPageUrl])

  return (
    <div>
      <h1>Table with list of people</h1>
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
            (<tr key={person.name} >
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
    currentPageUrl: state.currentPageUrl,
    people: state.people,
    backPageUrl: state.backPageUrl,
    nextPageUrl: state.nextPageUrl
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadPage: (pageUrl) => dispatch({ type: 'LOAD_PAGE', payload: { currentPageUrl: pageUrl } }),
    onSetPeople: (people) => dispatch({ type: 'SET_PEOPLE', payload: { people: people } }),
    onUpdatePaginator: (backPageUrl, nextPageUrl) => dispatch(
      { type: 'UPDATE_PAGINATOR', payload: { backPageUrl: backPageUrl, nextPageUrl: nextPageUrl } }),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);

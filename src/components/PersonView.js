import React from 'react'
import { connect } from 'react-redux'
import * as starWarActions from '../store/actions/starwar_actions'


const PersonView = (props) => {

  if (props.currentPerson === null) {
    return null
  }

  return (<div className='detail-container'>
    <h2>Detail section</h2>
    <div className='detail'>
      <p><span className='label'>Name:</span><span className='value'>{props.currentPerson.name}</span></p>
      <p><span className='label'>Height:</span><span className='value'>{props.currentPerson.height}</span></p>
      <p><span className='label'>Birth year:</span><span className='value'>{props.currentPerson.birth_year}</span></p>
      <p><span className='label'>Gender:</span><span className='value'>{props.currentPerson.gender}</span></p>
      <p><span className='label'>List of films:</span></p>
      <ul className='film-list'>
        {props.currentFilmList.map((film) => {
          return <li key={film.episode_id}>{film.title}</li>
        })}
      </ul>
    </div>
  </div>)
}

const mapStateToProps = state => {
  return {
    currentPerson: state.starWar.currentPerson,
    currentFilmList: state.starWar.currentFilmList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadFilms: (filmUrls) => dispatch(starWarActions.loadFilms(filmUrls))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PersonView)
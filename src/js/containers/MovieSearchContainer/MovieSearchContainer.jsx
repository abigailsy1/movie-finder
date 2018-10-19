import React from 'react';
import { Link } from 'react-router-dom'
import { getMovie } from './movieSearchActions'
import { getMovieById } from './movieSearchActions'

export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron text-center'>
          <h1><strong>Movie Finder</strong></h1>
          <p>Use the searchbar to find any movie!</p>
        </div>

        <div className='form-row'>
          <div className='col'>
            <div className='input-group'>
              <input
                // onChange={this.handleUpdateSearch}
                // value={this.props.input}
                type=' text' 
                className='form-control'
                placeholder='Enter a movie'
                id='input' />

              <span className='input-group-btn'>
                <button
                  // onClick={this.handleSearchBtn}
                  type='button'
                  className='btn btn-success'>
                  <strong>Search</strong>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
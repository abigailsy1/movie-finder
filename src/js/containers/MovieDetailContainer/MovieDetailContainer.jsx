import React from 'react';
import { Link } from 'react-router-dom'

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { movieInfo } = this.props;
    return (
      <div className='container'>
        <div className='jumbotron text-center'>
          <h1><strong>Movie Finder</strong></h1>
        </div>

        <div className='row'>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <img src={movieInfo.Poster} />
              </div>
            </div>
          </div>

          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{movieInfo.Title}</h5>
                <span className='badge badge-pill badge-success'>{movieInfo.Year}</span>
                <span className='badge badge-pill badge-success'>{movieInfo.Runtime}</span>
                <span className='badge badge-pill badge-success'>{movieInfo.Genre}</span>
                <p className='card-text'>{movieInfo.Plot}</p>
                <p className='card-text'>{movieInfo.Awards}</p>
                <p className='card-text'><strong>Metascore: </strong>{movieInfo.Metascore}</p>
                <p className='card-text'><strong>Imdb Rating:</strong> {movieInfo.imdbRating}</p>
                <Link to={'/'}>
                  <div className='row'>
                    <button type='submit' className='btn btn-dark'>Go Back</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetailContainer;
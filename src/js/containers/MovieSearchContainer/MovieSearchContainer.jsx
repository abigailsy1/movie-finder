import React from 'react';
import { Link } from 'react-router-dom'
import { getMovie } from './movieSearchActions'
import { getMovieById } from './movieSearchActions'

export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: ''
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.movieBtn = this.movieBtn.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
  }

  handleBtnClick() {
    const { dispatch } = this.props;
    dispatch(getMovie(this.state.movieName));
  }
  inputChange(event) {
    const { value } = event.target;
    this.setState({
      movieName: value
    });
  }
  movieBtn(e) {
    const { dispatch } = this.props;
    dispatch(getMovieById(e.target.id));
  }

  renderSearchResults() {
    const { movieSearch } = this.props;
    if (!movieSearch) { return null }
    return movieSearch.map((movie, index) => {
      return <div className='container' key={index}>
        <div className='card'>
          <div className='row'>
            <div className='col-sm-4'>
              <img src={movie.Poster} />
            </div>

            <div className='col-sm-8'>
              <div className='card-block'>
                <h4><strong>{movie.Title}</strong></h4>
                <p> {movie.Year} </p>
                <hr/>
                <p>{movie.Plot}</p>

                <Link to={`/movie/${movie.imdbID}`}>
                  <button
                    type='button'
                    className='btn btn-dark'
                    id={movie.imdbID}
                    onClick={this.movieBtn}>
                    More Information
                    </button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>;
    })
  }

  render() {
    const { movieSearch } = this.props;
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
                onChange={this.inputChange}
                value={this.state.movieName}
                type=' text'
                className='form-control'
                placeholder='Enter a movie'
                id='input'
              />

              <span className='input-group-btn'>
                <button
                  onClick={this.handleBtnClick}
                  type='button'
                  className='btn btn-success'>
                  <strong>Search</strong>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div>
          {this.renderSearchResults()}
        </div>


      </div>

    )
  }
}

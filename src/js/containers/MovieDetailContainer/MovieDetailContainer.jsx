import React from 'react';
import { Link } from 'react-router-dom'


class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="container">
        <h1>Viewing movie {this.props.match.params.id}</h1>
      </div>

    )
  }
}

export default MovieDetailContainer;
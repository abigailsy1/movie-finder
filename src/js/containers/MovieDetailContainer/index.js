import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
    return {
      movieInfo: store.movieSearch.movieInfo
    };
  }

  export default connect(mapStoreToProps)(MovieDetailContainer);
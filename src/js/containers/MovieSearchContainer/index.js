import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
    return {
      movieSearch: store.movieSearch.movieFulfilled.Search
    };
  }

  export default connect(mapStoreToProps)(MovieSearchContainer);
import { combineReducers } from 'redux';
import movieSearchReducer from './containers/MovieSearchContainer/movieSearchReducer';

const rootReducer = combineReducers({
  movieSearch: movieSearchReducer
});

export default rootReducer;

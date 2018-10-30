const defaultState = {
    movieFulfilled: [],
    movieInfo: {}
  };
  
  export default function MovieSearchReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_MOVIE_PENDING' : 
            return {
                ...state,
                error: ''
            }
        case 'GET_MOVIE_FULFILLED' : {
            if(typeof payload === 'null') {
                return {
                    ...state,
                    error: 'NO MOVIE SON!'
                }
            }
            return {
                ...state,
                movieFulfilled: payload
            };
        }    

        case 'GET_MOVIE_REJECTED' : 
        return {
            ...state,
            error: payload.message
        }

        case 'GET_MOVIE_BY_ID_FULFILLED':
        console.log('GET_MOVIE_BY_ID_FULFILLED payload',payload)
        return {
            ...state,
            movieInfo: payload
        }

    default: {
        return state;
      }
}
}

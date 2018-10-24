import axios from "axios";

export function getMovie(movieName) { 
  return {
    type: 'GET_MOVIE',
    payload:     
    axios
    .get(`/api/${movieName}`)
    .then(r => r.data)
    .catch(err => {
      console.log(err);
    })
  };

}

export function getMovieById(movieId){
    return {
        type: 'GET_MOVIE_BY_ID',
        payload:     
        axios
        .get(`/api/movie/${movieId}`)
        .then(r => {
            return r.data
        console.log('actions id payload',response.data)})
        .catch(err => {
          console.log(err);
        })    
      };
}

import { GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from '../actions'

const initialState = {
    movies: [],
    moviesLoaded: [],
    movieDetail: {}
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {
      return {
        ...state,
        movies: state.movies.concat(action.payload)
      } 
    }
    if (action.type === GET_MOVIES) {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    if (action.type === REMOVE_MOVIE_FAVORITE) {
        return {
          ...state,
          movies: state.movies.filter((movie) => movie.id !== action.payload )
        }
    }
    if (action.type === GET_MOVIE_DETAIL) {
      
      return {
        ...state,
        movieDetail: state.moviesLoaded.filter(movie => movie.imdbID === action.payload),
      };
    }
    return state;
  }
  
  export default rootReducer;
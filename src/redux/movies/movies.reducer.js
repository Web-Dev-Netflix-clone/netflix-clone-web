import { moviesActionTypes } from "./movies.types";

const initialState = {
  allMovies: [],
  movie: {
    id: 0,
    title: "",
    desc: "",
    image: "",
    imageHR: "",
    poster: "",
    trailer: "",
    rating: "",
    runtime: "",
  },
  heroMovie: {
    id: 0,
    title: "",
    desc: "",
    image: "",
    imageHR: "",
    poster: "",
    trailer: "",
    rating: "",
    runtime: "",
  },
  error: null,
  isLoading: false,
  movieDetails: { id: 0, movieDetailsResults: {} },
  movieInfoModal: false,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case moviesActionTypes.FETCH_MOVIES_RESULTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case moviesActionTypes.MOVIE_INFO_MODAL_OPEN:
      return {
        ...state,
        movieInfoModal: action.payload,
      };
    case moviesActionTypes.MOVIE_INFO_MODAL_CLOSE:
      return {
        ...state,
        movieInfoModal: action.payload,
      };
    case moviesActionTypes.FETCH_MOVIES_RESULTS_SUCCESS:
      return {
        ...state,
        allMovies: [...action.payload],
        error: false,
        isLoading: false,
      };
    case moviesActionTypes.FETCH_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
        error: false,
      };
    case moviesActionTypes.FETCH_SINGLE_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    case moviesActionTypes.SAVE_HERO_MOVIE:
      return {
        ...state,
        heroMovie: action.payload,
      };
    case moviesActionTypes.FETCH_MOVIES_RESULTS_FAILURE:
      return {
        ...state,
        allMovies: [],
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default moviesReducer;

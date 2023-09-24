import axios from "axios";

const Base_URL = "https://api.themoviedb.org/3/";
const API_KEY = "0cadc79cdbc61b770a5da2a14e500e11";

const withBaseUrl = (path) => `${Base_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
    static getMovies(){
        return axios(withBaseUrl("movie/popular"));
    }

    static getMovieDetails(id){
        return axios(withBaseUrl(`movie/${id}`));
    }

    static searchMovies(movie) {
        return axios(withBaseUrl("search/movie") + `&query=${movie}`);
    }
}
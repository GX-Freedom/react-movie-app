import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        // api_key: process.env.API_KEY,
        api_key: "349254ebae30eb6fc6ef0a307c64feca",
        language: "ko"
    }
});


export const tvApi = {
    getPopular: () => api.get("tv/popular"),
    today: () => api.get("tv/airing_today"),
    weeklyAir: () => api.get("tv/on_the_air"),
    // upComing: () => api.get("tv/upcoming"),
    topRated: () => api.get("tv/top_rated"),
    getLatest: () => api.get("tv/latest"),
    tvImages: (id) => api.get(`tv/${id}/images`),
    getDetail: (id) => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    postRate: (id) => api.get(`tv/${id}/rating`, {
        params: {
            guest_session_id: id,
            session_id: id
        }
    }),
    search: (term) => api.get("search/tv", {
        params: {
            // query: encodeURIComponent(term)
            query: term
        }
    })
};

export const movieApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    getPopular: () => api.get("movie/popular"),
    upComing: () => api.get("movie/upcoming"),
    topRated: () => api.get("movie/top_rated"),
    getLatest: () => api.get("movie/latest"),
    movieImages: (id) => api.get(`tv/${id}/images`),
    getDetail: (id) => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    postRate: (id) => api.get(`movie/${id}/rating`, {
        params: {
            guest_session_id: id,
            session_id: id
        }
    }),
    search: (term) => api.get("search/movie", {
        params: {
            // query: encodeURIComponent(term)
            query: term
        }
    })
};

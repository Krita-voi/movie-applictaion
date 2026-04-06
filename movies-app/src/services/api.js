const API_Key = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/?apikey=${API_Key}&s=2026&type=movie`,
  );
  const data = await response.json();

  return (data.Search || []).map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    url: movie.Poster,
    release_date: movie.Year,
  }));
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/?apikey=${API_Key}&s=${query}&type=movie`,
  );
  const data = await response.json();

  return (data.Search || []).map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    url: movie.Poster,
    release_date: movie.Year,
  }));
};

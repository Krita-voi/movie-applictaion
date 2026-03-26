const API_Key = "95810ee0";
const BASE_URL = "https://www.omdbapi.com/";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/?apikey=${API_Key}&s=2026&type=movie`,
  );
  const data = await response.json();

  return data.Search || [];
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/?apikey=${API_Key}&s=${query}&type=movie`,
  );
  const data = await response.json();

  return data.Search || [];
};

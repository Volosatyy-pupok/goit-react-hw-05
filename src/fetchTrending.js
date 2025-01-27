import axios from "axios";
export const FetchTrendings = async (pages, AbortController) => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${pages}`;
  const myApiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjA1YjVlNjIyOGZlNjZmMzdiMmUxMGFjMWI4YzZiYyIsIm5iZiI6MTczNzk5OTY0Ny44MTMsInN1YiI6IjY3OTdjNTFmNzAyZjQ5MmY0NzhmNTk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OQJcWBSDIJ-Zaj4aOSsFxgXLce4H70Pt0gLu5EWUX8k";
  const options = {
    headers: {
      Authorization: `Bearer ${myApiKey}`,
    },
    signal: AbortController.signal,
  };
  const data = await axios.get(url, options);

  return data;
};
export const FetchMovieDetails = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}`;
  const myApiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjA1YjVlNjIyOGZlNjZmMzdiMmUxMGFjMWI4YzZiYyIsIm5iZiI6MTczNzk5OTY0Ny44MTMsInN1YiI6IjY3OTdjNTFmNzAyZjQ5MmY0NzhmNTk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OQJcWBSDIJ-Zaj4aOSsFxgXLce4H70Pt0gLu5EWUX8k";
  const options = {
    headers: {
      Authorization: `Bearer ${myApiKey}`,
    },
  };
  const data = await axios.get(url, options);
  console.log(data.data);
  return data.data;
};
export const FetchCast = async (movie_id) => {
  const url = `
https://api.themoviedb.org/3/movie/${movie_id}/credits`;
  const myApiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjA1YjVlNjIyOGZlNjZmMzdiMmUxMGFjMWI4YzZiYyIsIm5iZiI6MTczNzk5OTY0Ny44MTMsInN1YiI6IjY3OTdjNTFmNzAyZjQ5MmY0NzhmNTk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OQJcWBSDIJ-Zaj4aOSsFxgXLce4H70Pt0gLu5EWUX8k";
  const options = {
    headers: {
      Authorization: `Bearer ${myApiKey}`,
    },
  };
  const data = await axios.get(url, options);
  console.log("FetchCast", data.data);
  return data.data;
};
export const FetchReviews = async (movie_id) => {
  const url = `
https://api.themoviedb.org/3/movie/${movie_id}/reviews`;
  const myApiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjA1YjVlNjIyOGZlNjZmMzdiMmUxMGFjMWI4YzZiYyIsIm5iZiI6MTczNzk5OTY0Ny44MTMsInN1YiI6IjY3OTdjNTFmNzAyZjQ5MmY0NzhmNTk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OQJcWBSDIJ-Zaj4aOSsFxgXLce4H70Pt0gLu5EWUX8k";
  const options = {
    headers: {
      Authorization: `Bearer ${myApiKey}`,
    },
  };
  const data = await axios.get(url, options);
  console.log("FetchReviews", data.data.results);
  return data.data.results;
};
export const FetchMovies = async (query, page) => {
  const url = `
https://api.themoviedb.org/3/search/movie`;
  const myApiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjA1YjVlNjIyOGZlNjZmMzdiMmUxMGFjMWI4YzZiYyIsIm5iZiI6MTczNzk5OTY0Ny44MTMsInN1YiI6IjY3OTdjNTFmNzAyZjQ5MmY0NzhmNTk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OQJcWBSDIJ-Zaj4aOSsFxgXLce4H70Pt0gLu5EWUX8k";
  const options = {
    headers: {
      Authorization: `Bearer ${myApiKey}`,
    },
    params: {
      query,
      page,
    },
  };
  const data = await axios.get(url, options);
  console.log("FetchMovies", data.data);
  return data.data;
};
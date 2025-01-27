import axios from "axios";
export const FetchTrendingImg = async (movie_id, controller) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/images`;
  const myApiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjA1YjVlNjIyOGZlNjZmMzdiMmUxMGFjMWI4YzZiYyIsIm5iZiI6MTczNzk5OTY0Ny44MTMsInN1YiI6IjY3OTdjNTFmNzAyZjQ5MmY0NzhmNTk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OQJcWBSDIJ-Zaj4aOSsFxgXLce4H70Pt0gLu5EWUX8k";
  const options = {
    // Замість my_unique_api_key вставте свій ключ
    headers: {
      Authorization: `Bearer ${myApiKey}`,
    },
    signal: controller.signal,
  };

  const data = await axios.get(url, options);

  console.log("FetchTrendingsImg", data.data);
  return data;
};
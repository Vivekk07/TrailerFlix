const API_KEY = "af7b34efa04379fbd6b4a395146d94ed";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchOldMovies: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
  fetchAnime: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  fetchMystery: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  fetchSciFi: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  fetchDrama: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
};

export default requests;

import React from "react";
import style from "./App.module.css";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./API/requests";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Sci Fi" fetchUrl={requests.fetchSciFi} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Old Movies" fetchUrl={requests.fetchOldMovies} />
      <Row title="Anime" fetchUrl={requests.fetchAnime} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Mystery" fetchUrl={requests.fetchMystery} />
    </div>
  );
}

export default App;

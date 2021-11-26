import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//components
import Catalog from "./components/Catalog";
import MovieDetails from "./components/MovieDetails";
const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios({
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "948f3688b51e757eec1c5bdeae74efc8",
        language: "en-US",
        sort_by: "popularity.desc",
        include_adult: "false",
        include_video: "false",
        page: 1,
        primary_release_year: 1999,
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <header>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>HackFlix</h1>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Catalog movies={movies} />} />
          <Route path="/movie/:movieID" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

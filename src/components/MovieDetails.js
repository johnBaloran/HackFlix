import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const MovieDetails = () => {
  const [individualMovie, setIndividualMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${params.movieID}`,
      params: {
        api_key: "948f3688b51e757eec1c5bdeae74efc8",
      },
    }).then((response) => {
      setIndividualMovie(response.data);
    });
  }, [params.movieID]);
  console.log(individualMovie);
  const { original_title, tagline, overview, poster_path } = individualMovie;
  return (
    <div className="poster">
      <div className="description">
        <h2>{original_title}</h2>
        <h3>{tagline}</h3>
        <p>{overview}</p>
      </div>
      <div className="poster-image">
        {individualMovie ? (
          <img
            src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`Poster for the movie: ${original_title}`}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MovieDetails;

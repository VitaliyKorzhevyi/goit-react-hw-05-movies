import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getIdMovie } from 'services/api';

import './styled/Details.css';

const Details = () => {
  const { movieId } = useParams();

  const [movies, setMovies] = useState({});

  useEffect(() => {
    getIdMovie(movieId).then(setMovies);
  }, [movieId]);

  console.log("movies", movies)
  const { title, overview, vote_average, poster_path, genres, backdrop_path, runtime, release_date } = movies;

  const releaseDate = new Date(release_date);
  const year = releaseDate.getFullYear();

  return (
    <div className="container-details">
      <img
        className="background-image"
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt=""
      />
      <div className="details-content">
        <ul>
          <li>
            <h2 className="title-details">{title}</h2>
          </li>
          <li>
            {/* <p>{year}</p> */}
            <p>
              {runtime} minutes / {Math.round(runtime / 60)} hours
            </p>
          </li>
          <li>
            <p>{overview}</p>
          </li>
          <li>
          <p>
            {genres.map(genre => genre.name).join(', ')}
          </p>
          </li>
        </ul>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Details;

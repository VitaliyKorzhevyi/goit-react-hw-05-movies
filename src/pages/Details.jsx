import { useEffect, useMemo, useState } from 'react';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getIdMovie } from 'services/api';

import './styled/Details.css';

const Details = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const lastPage = location.state?.from ?? '/';

  const [movies, setMovies] = useState({});

  const memoizedGetIdMovie = useMemo(() => getIdMovie(movieId), [movieId]);

  useEffect(() => {
    memoizedGetIdMovie.then(setMovies);
  }, [memoizedGetIdMovie]);

  console.log('movies', movies);
  const {
    title,
    overview,
    vote_average,
    poster_path,
    genres,
    backdrop_path,
    runtime,
    release_date,
    production_countries,
    original_language,
    popularity,
    homepage,
  } = movies;

  return (
    <>
    <div className="container-details">
      <div className="container-btn-last">
        <Link to={lastPage}>
          <button type="button">
            <i className="bx bx-chevron-left bx-sm bx-fade-left-hover"></i>
          </button>
        </Link>
      </div>
      <div>
        <img
          className="background-image"
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt={title}
        />
        <div className="details-content">
          <ul className="details-list">
            <li>
              <h2 className="title-details">
                {title} ({release_date && release_date.slice(0, 4)})
              </h2>
            </li>
            <li className="item-details one-info">
              <p>
                {production_countries &&
                  production_countries.map(i => i.name).join(', ')}
              </p>
              <p>{genres && genres.map(i => i.name).join(', ')}</p>
            </li>
            <li className="item-details one-info">
              <p>
                <strong>Language: </strong>
                {original_language}
              </p>
              <p>
                {runtime} minutes / {Math.round(runtime / 60)} hours
              </p>
              <p>
                <strong>Range:</strong> {vote_average}
              </p>
              <p>
                <strong>Popularity:</strong> {Math.floor(popularity * 10) / 10}
              </p>
            </li>
            <li className="item-details three-info">
              <p>{overview}</p>
            </li>
            <li>
              <button type="button">
                <a href={homepage}>Watch</a>
              </button>
              <Link to={"cast"} state={{ from: location.state?.from }}>
                <button type="button">Top Billed Cast</button>
              </Link>
              <Link to={"reviews"} state={{ from: location.state?.from }}>
                <button type="button">Reviews</button>
              </Link>
            </li>
          </ul>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        </div>
      </div>
    </div>
    <Outlet />
    </>
  );
};

export default Details;

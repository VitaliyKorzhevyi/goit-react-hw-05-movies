import { Suspense, useEffect, useMemo, useState } from 'react';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getCastMovie, getIdMovie, getReviewsMovie } from 'services/api';

import './styled/Details.css';
import placeholderBackdrop from "../images/placeholderBackdropDetails.jpg";
import placeholderPoster from "../images/placeholderPosterSearch.png";


const Details = ({ onGetCast, onGetReviews}) => {
  const { movieId } = useParams();
  const location = useLocation();
  const lastPage = location.state?.from ?? '/';

  const [movies, setMovies] = useState({});

  // Memoized get запити
  const memoMovie = useMemo(() => getIdMovie(movieId), [movieId]);
  const memoCast = useMemo(() => getCastMovie(movieId), [movieId]);
  const memoReviews = useMemo(() => getReviewsMovie(movieId), [movieId]);

  useEffect(() => {
    memoMovie.then(setMovies);
    memoCast.then(res => {
      onGetCast(res.cast);
    });
    memoReviews.then(res => {
      onGetReviews(res.results);
    });
  }, [memoMovie, memoCast, memoReviews, onGetCast, onGetReviews]);

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
            src={backdrop_path ? `https://image.tmdb.org/t/p/w500/${backdrop_path}` : placeholderBackdrop}
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
                  <strong>Popularity:</strong>{' '}
                  {Math.floor(popularity * 10) / 10}
                </p>
              </li>
              <li className="item-details three-info">
                <p>{overview}</p>
              </li>
              <li className='item-details btns-info'>
                <button type="button" className='btn-watch'>
                <i className='bx bx-right-arrow' ></i>
                  <a href={homepage}>Watch</a>
                </button>
                <Link to={'cast'}>
                  <button type="button" className='btn-link'>Top Billed Cast</button>
                </Link>
                <Link to={'reviews'}>
                  <button type="button" className='btn-link'>Reviews</button>
                </Link>
              </li>
            </ul>
            <img
              src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : placeholderPoster}
              alt={title}
            />
          </div>
        </div>
      </div>
      <div className='ellipse-desktop-1'></div>
      <div className='ellipse-desktop-2'></div>
      <div className='ellipse-desktop-3'></div>
      <div className='ellipse-desktop-4'></div>
      <div className='ellipse-desktop-5'></div>
      <Suspense>
           <Outlet />
      </Suspense>
    </>
  );
};

export default Details;

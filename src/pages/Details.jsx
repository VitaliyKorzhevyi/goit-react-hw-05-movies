import { Suspense, useEffect, useMemo, useState } from 'react';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getCastMovie, getIdMovie, getReviewsMovie } from 'services/api';

import './styled/Details.css';

import placeholderBackdrop from '../images/placeholderBackdropDetails.jpg';
import placeholderPoster from '../images/placeholderPosterSearch.png';
import Loader from 'components/Loader';

const Details = ({ onGetCast, onGetReviews }) => {
  const { movieId } = useParams();
  const location = useLocation();
  const lastPage = location.state?.from ?? '/';

  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Memoized get запити
  const memoMovie = useMemo(() => getIdMovie(movieId), [movieId]);
  const memoCast = useMemo(() => getCastMovie(movieId), [movieId]);
  const memoReviews = useMemo(() => getReviewsMovie(movieId), [movieId]);

  useEffect(() => {
    memoMovie.then(res => {
      if (!res.length > 0) {
        setMovies(res);
        setIsLoading(true);
      }
    });
    memoCast.then(res => {
      onGetCast(res.cast);
    });
    memoReviews.then(res => {
      onGetReviews(res.results);
    });
  }, [memoMovie, memoCast, memoReviews, onGetCast, onGetReviews]);

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
    tagline,
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
        {isLoading ? (
          <div>
            <img
              className="background-image"
              src={
                backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                  : placeholderBackdrop
              }
              alt={title}
            />
            <div className="details-content">
              <ul className="details-list">
                <li>
                  <h2 className="title-details">
                    {title} ({release_date && release_date.slice(0, 4)})
                  </h2>
                </li>
                <li className="item-details tagline-info">
                  <p>
                    Tagline:{' '}
                    <span>
                      <strong> "{tagline}"</strong>
                    </span>
                  </p>
                </li>
                <li className="item-details more-info">
                  <span className="one-info">
                    <p>
                      Genres:{' '}
                      <strong>
                        {genres && genres.map(i => i.name).join(', ')}
                      </strong>
                    </p>
                    <p>
                      {' '}
                      Countries:
                      <strong>
                        {' '}
                        {production_countries &&
                          production_countries.map(i => i.name).join(', ')}
                      </strong>
                    </p>
                    <p>
                      Language:
                      <strong> {original_language}</strong>
                    </p>
                  </span>
                  <span className="two-info">
                    <p>
                      Runtime:{' '}
                      <strong>
                        {runtime} minutes / {Math.round(runtime / 60)} hours
                      </strong>
                    </p>
                    <p>
                      Range:{' '}
                      <strong>{Math.floor(vote_average * 10) / 10}</strong>
                    </p>

                    <p>
                      Popularity:
                      <strong> {Math.floor(popularity * 10) / 10}</strong>
                    </p>
                  </span>
                </li>
                <li className="item-details three-info">
                  <h3>Overview</h3>
                  <p>{overview}</p>
                </li>
                <li className="item-details btns-info">
                  <button
                    type="button"
                    className={homepage ? 'btn-watch' : 'btn-watch-none'}
                  >
                    <i className="bx bx-right-arrow"></i>
                    <a href={homepage ? homepage : ''}>Watch</a>
                  </button>
                  <Link to={'cast'}>
                    <button type="button" className="btn-link">
                      Top Billed Cast
                    </button>
                  </Link>
                  <Link to={'reviews'}>
                    <button type="button" className="btn-link">
                      Reviews
                    </button>
                  </Link>
                </li>
              </ul>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : placeholderPoster
                }
                alt={title}
              />
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <div className="ellipse-desktop-1"></div>
      <div className="ellipse-desktop-2"></div>
      <div className="ellipse-desktop-3"></div>
      <div className="ellipse-desktop-4"></div>
      <div className="ellipse-desktop-5"></div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Details;

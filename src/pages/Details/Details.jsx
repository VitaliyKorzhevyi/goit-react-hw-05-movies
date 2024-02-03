import { Suspense, useEffect, useMemo, useState } from 'react';

import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getIdMovie } from 'services/api';

import s from './Details.module.css';

import placeholderBackdrop from '../../images/placeholderBackdropDetails.jpg';
import placeholderPoster from '../../images/placeholderPosterSearch.png';
import Loader from 'components/Loader/Loader';

const Details = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const memoMovie = useMemo(() => getIdMovie(movieId), [movieId]);

  useEffect(() => {
    memoMovie.then(res => {
      if (!res.length > 0) {
        setMovies(res);
        setIsLoading(true);
      }
    });
  }, [memoMovie]);

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
      <div className={s.container}>
        <div className={s.btnLast}>
          <button
            type="button"
            onClick={() => {
              navigate(location.state?.from ?? '/');
            }}
          >
            <i className="bx bx-chevron-left bx-sm bx-fade-left-hover"></i>
          </button>
        </div>
        {isLoading ? (
          <div>
            <img
              className={s.backgroundImg}
              src={
                backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                  : placeholderBackdrop
              }
              alt={title}
            />
            <div className={s.content}>
              <ul className={s.list}>
                <li>
                  <h2 className={s.title}>
                    {title} ({release_date && release_date.slice(0, 4)})
                  </h2>
                </li>
                <li className={s.taglineInfo}>
                  <p>
                    Tagline:{' '}
                    <span>
                      <strong> "{tagline}"</strong>
                    </span>
                  </p>
                </li>
                <li className={s.moreInfo}>
                  <span>
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
                  <span>
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
                <li className={s.threeInfo}>
                  <h3>Overview</h3>
                  <p>{overview}</p>
                </li>
                <li className={s.btnsInfo}>
                  <button
                    type="button"
                    className={homepage ? s.btnWatch : s.btnWatchNone}
                  >
                    <i className="bx bx-right-arrow"></i>
                    <a href={homepage ? homepage : ''}>Watch</a>
                  </button>
                  <Link to={'cast'} state={{ from: location.state?.from }}>
                    <button type="button" className={s.btnLink}>
                      Top Billed Cast
                    </button>
                  </Link>
                  <Link to={'reviews'} state={{ from: location.state?.from }}>
                    <button type="button" className={s.btnLink}>
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
      <div className={s.ellipseDesktop1}></div>
      <div className={s.ellipseDesktop2}></div>
      <div className={s.ellipseDesktop3}></div>
      <div className={s.ellipseDesktop4}></div>
      <div className={s.ellipseDesktop5}></div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Details;

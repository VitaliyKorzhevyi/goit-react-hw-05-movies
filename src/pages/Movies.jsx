import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { getSearchMovie } from 'services/api';
import { Placeholder } from 'components/Loader';

import placeholderBackdrop from '../images/placeholderBackdropSearch.jpg';
import placeholderPoster from '../images/placeholderPosterSearch.png';

import './styled/Movies.css';

const Movies = () => {
  const [searchFilm, setSearchFilm] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const search = searchParams.get('name');
    if (search === null) return;
    getSearchMovie(search).then(resp => {
      setSearchFilm(resp.results);
    });
  }, [searchParams]);

  const updateQueryString = query => {
    query.preventDefault();
    const name = query.target.value;
    const nextParams = name !== '' && { name };
    setSearchParams(nextParams);
  };

  return (
    <div className="container-search">
      <div className="container-search-input">
        <input
          type="text"
          className="input-search"
          placeholder="Search movie..."
          value={searchParams.get('name') || ''}
          onChange={updateQueryString}
          // onKeyDown={onInputKeyDown}
        />
        {/* <button
          className="btn-search"
          type="button"
          onClick={handleClick}
        >
          <i className="bx bx-search bx-sm bx-burst-hover"></i>
        </button> */}
      </div>
      {searchFilm.length > 0 ? (
        <ul className="list-search">
          {searchFilm.map(
            ({
              id,
              original_title,
              title,
              poster_path,
              backdrop_path,
              original_language,
              vote_average,
              vote_count,
              release_date,
            }) => (
              <Link key={id} state={{ from: location }} to={`${id}`}>
                <li className="item-search">
                  <div className="img-search-backdrop">
                    <img
                      src={
                        backdrop_path
                          ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                          : placeholderBackdrop
                      }
                      alt={title}
                    />
                  </div>

                  <ul className="main-info-search">
                    <li>
                      <img
                        className="img-search-poster"
                        src={
                          poster_path
                            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                            : placeholderPoster
                        }
                        alt={title}
                      />
                    </li>
                    <li className="info-search-item">
                      <p className="title-search-item">{original_title}</p>
                      <p className="text-search-item">
                        <span>
                          <strong>Original language: </strong>
                          {original_language}
                        </span>

                        <span>
                          <strong>Release date: </strong>
                          {release_date}
                        </span>
                        <span>
                          <strong>Rating: </strong>
                          {Math.floor(vote_average * 10) / 10}({vote_count})
                        </span>
                      </p>
                    </li>
                  </ul>
                </li>
              </Link>
            )
          )}
        </ul>
      ) : (
        <div className='placeholder-search'>
          <Placeholder />
        </div>
      )}
    </div>
  );
};

export default Movies;

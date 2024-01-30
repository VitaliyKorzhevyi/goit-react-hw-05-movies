import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getSearchMovie } from 'services/api';

import './styled/Movies.css';
import placeholderBackdrop from '../images/placeholderBackdropSearch.jpg';
import placeholderPoster from '../images/placeholderPosterSearch.png';

const Movies = () => {
  const location = useLocation();

  const [search, setSearch] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const onSearchListMovies = useMemo(() => {
    return () => {
      getSearchMovie(search).then(res => {
        setSearchData(res.results);
      });
    };
  }, [search]);

  const onInputKeyDown = e => {
    if (e.key === 'Enter') {
      onSearchListMovies();
    }
  };

  console.log('searchData', searchData);

  return (
    <div className="container-search">
      <div className="container-search-input">
        <input
          type="text"
          className="input-search"
          placeholder="Search movie..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={onInputKeyDown}
        />
        <button
          className="btn-search"
          type="button"
          onClick={onSearchListMovies}
        >
          <i className="bx bx-search bx-sm bx-burst-hover"></i>
        </button>
      </div>
      {searchData.length > 0 ? (
        <ul className="list-search">
          {searchData.map(
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
      ) : null}
    </div>
  );
};

export default Movies;

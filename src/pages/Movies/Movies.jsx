import { useMemo, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { getSearchMovie } from 'services/api';
import { Placeholder } from 'components/Loader/Loader';

import placeholderBackdrop from '../../images/placeholderBackdropSearch.jpg';
import placeholderPoster from '../../images/placeholderPosterSearch.png';

import s from './Movies.module.css';
import { toast } from 'react-toastify';

const Movies = () => {
  const [searchFilm, setSearchFilm] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputSearch, setInputSearch] = useState('');
  const location = useLocation();
  const productName = searchParams.get('search');

  useMemo(() => {
    if (!productName) {
      return;
    }
    getSearchMovie(productName).then(res => {
      console.log('res', res.results);
      if (res.results.length === 0) {
        toast.info(
          `Your search for "${productName}" did not have any matches.`
        );
        return;
      }
      setSearchFilm(res.results);
      setInputSearch(productName);
    });
  }, [productName]);

  const updateQueryString = e => {
    e.preventDefault();
    setSearchParams({
      search: inputSearch,
    });
  };

  const onKeyValue = e => {
    if (e.key === 'Enter') {
      updateQueryString(e);
    }
  };

  const onValueString = e => {
    setInputSearch(e.currentTarget.value);
  };

  return (
    <div className={s.container}>
      <div className={s.containerInput}>
        <input
          type="text"
          className={s.input}
          placeholder="Search movie..."
          value={inputSearch}
          onChange={onValueString}
          onKeyDown={onKeyValue}
        />
        <button className={s.btn} type="button" onClick={updateQueryString}>
          <i className="bx bx-search bx-sm bx-burst-hover"></i>
        </button>
      </div>
      {searchFilm.length > 0 ? (
        <ul className={s.list}>
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
                <li className={s.item}>
                  <div className={s.imgBackdrop}>
                    <img
                      src={
                        backdrop_path
                          ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                          : placeholderBackdrop
                      }
                      alt={title}
                    />
                  </div>

                  <ul className={s.mainInfo}>
                    <li>
                      <img
                        className={s.imgPoster}
                        src={
                          poster_path
                            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                            : placeholderPoster
                        }
                        alt={title}
                      />
                    </li>
                    <li className={s.infoItem}>
                      <p className={s.titleItem}>{original_title}</p>
                      <p className={s.textItem}>
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
        <div className={s.placeholder}>
          <Placeholder />
        </div>
      )}
    </div>
  );
};

export default Movies;

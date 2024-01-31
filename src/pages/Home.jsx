import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getListTrending } from 'services/api';
import Loader from 'components/Loader';

import placeholderPoster from '../images/placeholderPosterSearch.png';

import './styled/Home.css';
import Carousel from 'components/Slider';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getListTrending().then(res => {
      console.log('res.results', res.results);
      if (res.results.length > 0) {
        setMovies(res.results);
        setIsLoading(true);
      }
    });
  }, []);

  console.log('movies', movies);

  // https://www.dunemovie.net/ до постера
  return (
    <div className="container-main">
      {isLoading ? (
        <div>
          {movies.map(({ id, title, poster_path, backdrop_path }, index) => (
            <div className="big-poster" key={index}>
              {index === 0 && (
                // Рендер разметки для первого элемента
                <div className=''>
                  <Carousel />
                  <Link state={{ from: location }} to={`movies/${id}`}>
                    <p className="title-trending-movies">{title}</p>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}

      <div className="container-list-trending">
        <h2>Trending movies today</h2>
        {isLoading ? (
          <ul className="list-trending">
            {movies.map(({ id, title, poster_path, backdrop_path }, index) => (
              <li className="item-trending" key={index} id={`movie-${index}`}>
                <img
                  className="main-poster"
                  src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                  alt={title}
                />
                <Link state={{ from: location }} to={`movies/${id}`}>
                  <p className="title-trending-movies">{title}</p>
                </Link>
                <img
                  className="poster-list-trending"
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : placeholderPoster
                  }
                  alt={title}
                />
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Home;

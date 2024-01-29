import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getListTrending } from 'services/api';

import './styled/Home.css';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    getListTrending().then(res => {
      setMovies(res.results);
    });
  }, []);

  console.log('movies', movies);

  return (
    <div className="container-list-trending">
      <h2>Trending movies today</h2>
      <ul className="list-trending">
        {movies.map(({ id, title, poster_path, backdrop_path }) => (
          <li className="item-trending" key={id}>
            <Link state={{ from: location }} to={`movies/${id}`}>
              <p className="title-trending-movies">{title}</p>
            </Link>
            <img
              className="poster-list-trending"
              src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : `https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

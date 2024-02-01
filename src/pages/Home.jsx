import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getListTrending } from 'services/api';
import Loader from 'components/Loader';

import placeholderPoster from '../images/placeholderPosterSearch.png';
import honeyComb from '../images/honeyСomb.png';

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

  const onScroll = e => {
    const container = e.currentTarget;
    const delta = e.deltaY || e.detail || e.wheelDelta;
    container.scrollLeft += delta;
  };

  return (
    <div className="container-main">
      {isLoading ? (
        <div>
          <img className='honeycomb' src={honeyComb} alt="" />
          {movies.map(({ id }, index) => (
            <div className="big-poster" key={index}>
              {index === 0 && (
                <div>
                  <Carousel />
                  <ul className="info-poster">
                    <li className="item-title-poster">
                      <h1 className="title-trending-movies">
                        The <span>B</span>eekeeper
                      </h1>
                    </li>
                    <li className="item-overview-poster">
                      <p>
                        One man's brutal campaign for vengeance takes on
                        national stakes after he is revealed to be a former
                        operative of a powerful and clandestine organization
                        known as "Beekeepers".
                      </p>
                    </li>
                    <li className="item-details-poster">
                      <p>2024</p>
                      <p>United Kingdom, United States of America</p>
                      <p>105 minutes / 1 hour 45 minutes</p>
                    </li>
                  </ul>
                  <div className="main-poster-btns">
                    <a href="https://www.youtube.com/watch?v=SzINZZ6iqxY&ab_channel=MGM">
                      <button className="btn-watch-trailer" type="button">
                        Watch Trailer
                      </button>
                    </a>

                    <Link state={{ from: location }} to={`movies/${id}`}>
                      <button className="btn-link-more" type="button">
                        i
                      </button>
                    </Link>
                  </div>
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
          <ul className="list-trending" onWheel={onScroll}>
            {movies.map(({ id, title, poster_path, backdrop_path }, index) => (
              <li className="item-trending" key={index} id={`movie-${index}`}>
                <Link state={{ from: location }} to={`movies/${id}`}>
 
                  <img
                    className="poster-list-trending"
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : placeholderPoster
                    }
                    alt={title}
                  />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
      <div className="ellipse-desktop-6"></div>
      <div className="ellipse-desktop-7"></div>
      <div className="ellipse-desktop-8"></div>
      <div className="ellipse-desktop-9"></div>
      <div className="ellipse-desktop-10"></div>
    </div>
  );
};

export default Home;

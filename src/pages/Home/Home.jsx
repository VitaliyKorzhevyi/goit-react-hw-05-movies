import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getListTrending } from 'services/api';
import Loader from '../../components/Loader/Loader';

import placeholderPoster from '../../images/placeholderPosterSearch.png';
import honeyComb from '../../images/honeyСomb.png';

import s from './Home.module.css';
import Carousel from 'components/Slider/Slider';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getListTrending().then(res => {
      if (res.results.length > 0) {
        setMovies(res.results);
        setIsLoading(true);
      }
    });
  }, []);

  const onScroll = e => {
    const c = e.currentTarget;
    const d = e.deltaY || e.detail || e.wheelDelta;
    c.scrollLeft += d;
  };

  return (
    <div className={s.container}>
      {isLoading ? (
        <div>
          <img className={s.honeyComb} src={honeyComb} alt="" />
          {movies.map(({ id }, index) => (
            <div className={s.bigPoster} key={index}>
              {index === 0 && (
                <div>
                  <Carousel />
                  <ul className={s.infoPoster}>
                    <li className={s.titlePoster}>
                      <h1 className={s.bigTitle}>
                        The <span>B</span>eekeeper
                      </h1>
                    </li>
                    <li className={s.overviewPoster}>
                      <p>
                        One man's brutal campaign for vengeance takes on
                        national stakes after he is revealed to be a former
                        operative of a powerful and clandestine organization
                        known as "Beekeepers".
                      </p>
                    </li>
                    <li className={s.detailsPoster}>
                      <p>2024</p>
                      <p>United Kingdom, United States of America</p>
                      <p>105 minutes / 1 hour 45 minutes</p>
                    </li>
                  </ul>
                  <div className={s.posterBtns}>
                    <a href="https://www.youtube.com/watch?v=SzINZZ6iqxY&ab_channel=MGM">
                      <button className={s.btnWatch} type="button">
                        Watch Trailer
                      </button>
                    </a>

                    <Link state={{ from: location }} to={`movies/${id}`}>
                      <button className={s.btnLinkMore} type="button">
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
      <div className={s.containerList}>
        <h2>Trending movies today</h2>
        {isLoading ? (
          <ul className={s.listTrending} onWheel={onScroll}>
            {movies.map(({ id, title, poster_path }, index) => (
              <li className={s.itemTrending} key={index} id={`movie-${index}`}>
                <Link state={{ from: location }} to={`movies/${id}`}>
                  <img
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
      <div className={s.ellipseDesktop6}></div>
      <div className={s.ellipseDesktop7}></div>
    </div>
  );
};

export default Home;

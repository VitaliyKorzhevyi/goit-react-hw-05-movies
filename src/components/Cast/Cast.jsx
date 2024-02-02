import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/api';

import s from './Cast.module.css';

import placeholderPhoto from '../../images/placeholderPhoto.jpg';


const Cast = () => {
  const [cast, setCast] = useState({});
  const { movieId } = useParams();
  const memoCast = useMemo(() => getCastMovie(movieId), [movieId]);
  
  useEffect(() => {
    memoCast.then(res => {
      setCast(res.cast);
    });
  }, [memoCast, setCast]);

  const onScroll = e => {
    const container = e.currentTarget;
    const delta = e.deltaY || e.detail || e.wheelDelta;
    container.scrollLeft += delta;
  };

  return (
    <div className={s.container}>
      <h3>Top Billed Cast</h3>
      {cast.length ? (
        <ul className={s.list} onWheel={onScroll}>
          {cast.map(({ name, character, profile_path }, index) => (
            <li key={index} className={s.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : placeholderPhoto
                }
                alt={name}
              />
              <p className={s.name}>
                <strong>{name}</strong>
              </p>
              <p className={s.character}>({character})</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any information about cast of this movie.</p>
      )}
    </div>
  );
};

export default Cast;

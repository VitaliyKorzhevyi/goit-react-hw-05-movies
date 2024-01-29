import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/api';

import './styled/Cast.css';
import photoInvalid from '../images/photoInvalid.jpg'

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState({});

  useEffect(() => {
    getCastMovie(movieId).then(res => {
      setCast(res.cast);
    });
  }, [movieId]);

  const onScroll = (e) => {
    const container = e.currentTarget;
    const delta = e.deltaY || e.detail || e.wheelDelta;

    // Горизонтальная прокрутка при колесе мыши
    container.scrollLeft += delta;
  };

  console.log('castcast', cast);

  return (
    <div className="container-cast">
      <h3>Top Billed Cast</h3>  
      {cast.length ? (
        <ul className="list-cast" onWheel={onScroll}>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id} className="item-cast">
              <img
                src={profile_path?`https://image.tmdb.org/t/p/w500/${profile_path}` : `${photoInvalid}`}
                alt={name}
              />
              <p className='cast-name'><strong>{name}</strong></p>
              <p className='cast-character'>{character}</p>
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

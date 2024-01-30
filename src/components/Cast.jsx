import './styled/Cast.css';
import photoInvalid from '../images/photoInvalid.jpg';

const Cast = ({ onGetCast }) => {

  //* Горизонтальна прокрутка колеса миші
  const onScroll = e => {
    const container = e.currentTarget;
    const delta = e.deltaY || e.detail || e.wheelDelta;
    container.scrollLeft += delta;
  };

  return (
    <div className="container-cast">
      <h3>Top Billed Cast</h3>
      {onGetCast.length ? (
        <ul className="list-cast" onWheel={onScroll}>
          {onGetCast.map(({ id, name, character, profile_path }) => (
            <li key={id} className="item-cast">
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : `${photoInvalid}`
                }
                alt={name}
              />
              <p className="cast-name">
                <strong>{name}</strong>
              </p>
              <p className="cast-character">{character}</p>
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

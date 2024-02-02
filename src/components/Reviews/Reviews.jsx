import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'services/api';

import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const { movieId } = useParams();
  const MAX_LENGTH = 400;

  const memoReviews = useMemo(() => getReviewsMovie(movieId), [movieId]);

  useEffect(() => {
    memoReviews.then(res => {
      setReviews(res.results);
    });
  }, [memoReviews, setReviews]);

  return (
    <div className={s.container}>
      <h3>Reviews</h3>
      {reviews.length ? (
        <ul className={s.list}>
          {reviews.map(({ id, author, author_details, url, content }) => (
            <li className={s.item} key={id}>
              <div>
                <div className={s.title}>
                  <p>
                    <strong>
                      A review by{' '}
                      <span className={s.authorAccent}>{author}</span>
                    </strong>
                  </p>
                  <span className={s.ratingInfo}>
                    <i className="bx bxs-star"></i>
                    {author_details.rating}.0
                  </span>
                </div>
                <p className={s.textInfo}>
                  {content.length > MAX_LENGTH
                    ? `${content.slice(0, MAX_LENGTH)}...`
                    : content}
                  {content.length > MAX_LENGTH && (
                    <a href={url} className={s.more}>
                      <strong> Read more</strong>
                    </a>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any information about reviews of this movie =(</p>
      )}
    </div>
  );
};

export default Reviews;

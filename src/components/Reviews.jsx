import './styled/Reviews.css';

const Reviews = ({ onGetReviews }) => {
  // const { movieId } = useParams();
  // const [reviews, setReviews] = useState({});

  // useEffect(() => {
  
  //   getReviewsMovie(movieId).then(res => {
  //     setReviews(res.results);
  //   });
  // }, [movieId]);

  const MAX_LENGTH = 400;

  console.log('onGetReviews', onGetReviews);

  return (
    <div className="container-reviews">
      <h3>Reviews</h3>
      {onGetReviews.length ? (
        <ul className="list-reviews">
          {onGetReviews.map(({ id, author, author_details, url, content }) => (
            <li key={id}>
              <div>
                <div className='title-review'>
                  <p>
                    <strong>A review by {author}</strong>
                  </p>
                  <span className='rating-info'>
                    <i className="bx bxs-star"></i>
                    {author_details.rating}.0
                  </span>
                </div>
                <p>
                  {content.length > MAX_LENGTH
                    ? `${content.slice(0, MAX_LENGTH)}...`
                    : content}
                  {content.length > MAX_LENGTH && (
                    <a href={url} className="more-reviews">
                      <strong> Read more</strong>
                    </a>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any information about reviews of this movie.</p>
      )}
    </div>
  );
};

export default Reviews;

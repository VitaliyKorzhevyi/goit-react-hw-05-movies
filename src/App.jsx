import { lazy, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
const Layout = lazy(() => import('./components/Layout.jsx'));

  const Home = lazy(() => import('pages/Home'));
  const Movies = lazy(() => import('pages/Movies'));
  const Details = lazy(() => import('pages/Details'));
  const Cast = lazy(() => import('components/Cast'));
  const Reviews = lazy(() => import('components/Reviews'));


export const App = () => {

  const [castData, setCastData] = useState({});
  const [reviewsData, setReviewsData] = useState({});
  // console.log("castData", castData)
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Details onGetCast={setCastData} onGetReviews={setReviewsData}/>}>
          <Route path="cast" element={<Cast onGetCast={castData}/>} />
          <Route path="reviews" element={<Reviews onGetReviews={reviewsData}/>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};


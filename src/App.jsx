import { lazy} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('pages/Home/Home.jsx'));
const Movies = lazy(() => import('pages/Movies/Movies.jsx'));
const Details = lazy(() => import('pages/Details/Details.jsx'));
const Cast = lazy(() => import('components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('components/Reviews/Reviews.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Details />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

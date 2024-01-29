import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
const Layout = lazy(() => import('./components/Layout.jsx'));

  const Home = lazy(() => import('pages/Home'));
  const Movies = lazy(() => import('pages/Movies'));
  const Details = lazy(() => import('pages/Details'));
  const Cast = lazy(() => import('components/Cast'));
  const Reviews = lazy(() => import('components/Reviews'));


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


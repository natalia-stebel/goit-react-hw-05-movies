import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { lazy, Suspense } from 'react';
// import Movies from './views/movies';
// import Home from './views/Home';
// import NotFoundView from './views/notFoundView';
// import MovieDetails from '../components/views/MovieDetails';

const Home = lazy(() => import('./views/Home' /* webpackChunkName: "Home" */));
const Movies = lazy(() =>
  import('./views/movies' /* webpackChunkName: "Movies" */)
);
const MovieDetails = lazy(() =>
  import('./views/MovieDetails' /* webpackChunkName: "MovieDetails" */)
);
const Cast = lazy(() => import('./views/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('./views/Cast' /* webpackChunkName: "Reviews" */)
);

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>LOADING...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId//*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          {/* <Route path="*" element={<NotFoundView />}></Route> */}
        </Routes>
      </Suspense>
    </>
  );
}

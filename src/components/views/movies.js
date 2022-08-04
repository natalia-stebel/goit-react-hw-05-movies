import { useState, useEffect } from 'react';
import { searchMovies } from '../services/api';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieGallery from '../Gallery/MovieGallery';
import ButtonGoBack from './ButtonGoBack';
// import { Spinner } from '../Loader/Loader';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searQuery, setSearQuery] = useState([]);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    async function searchMovie() {
      if (query === '') {
        return;
      }

      try {
        const searchRequest = await searchMovies(query);

        if (searchRequest.length === 0) {
          return alert(':(  . Please try another name of movie.');
        }
        setSearQuery();
      } catch (error) {}
    }
    searchMovie();
  }, [query]);

  const formData = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
    if (e.currentTarget.elements.query.value.trim() === '') {
      alert(':( Search is empty');
      return;
    }
  };

  return (
    <>
      {/* <Spinner /> */}
      <div>
        <ButtonGoBack />
        <SearchBar onSubmit={formData} />
        {searQuery && <MovieGallery movies={query} />}
      </div>
    </>
  );
}

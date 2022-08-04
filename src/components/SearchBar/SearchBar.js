import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const searchValue = searchQuery.get('query') ?? '';

  const handleInputChange = e => {
    if (e.currentTarget.value.toLowerCase() !== searchQuery)
      setSearchQuery({ query: e.currentTarget.value.toLowerCase() });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={searchQuery}
        name="query"
        onChange={handleInputChange}
        type="text"
      />
      <button type="button" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

import { Link, useLocation } from 'react-router-dom';

export default function ButtonGoBack() {
  const location = useLocation();
  return (
    <Link to={location?.state?.from ?? '/'}>
      <button type="button">Go back</button>
    </Link>
  );
}

import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      // className={}
      // activeClassName={}
    >
      Home
    </NavLink>

    <NavLink
      to="/movies"
      // className={}
      // activeClassName={}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;

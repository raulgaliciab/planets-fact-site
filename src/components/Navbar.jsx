import { NavLink } from 'react-router';
import data from '../data/data.json';

const planets = data.map( planet => planet.name );

export const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>The Planets</NavLink>
      <section>

        {
          planets.map( planet => (
            <NavLink to={planet.toLowerCase()}>
              {planet.toUpperCase()}
            </NavLink>
          ))
        }
      </section>
    </nav>
  )
}

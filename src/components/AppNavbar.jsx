import { NavLink } from 'react-router';
import data from '../data/data.json';

const planets = data.map( planet => planet.name );

export const AppNavbar = () => {
  return (
    <nav>
      <NavLink to='/'>THE PLANETS</NavLink>
      <section>

        {
          planets.map( planet => (
            <NavLink
              key={planet.toLowerCase()}
              to={planet.toLowerCase()}>
              {planet.toUpperCase()}
            </NavLink>
          ))
        }
      </section>
    </nav>
  )
}

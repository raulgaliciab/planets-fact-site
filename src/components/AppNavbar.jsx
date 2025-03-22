import { NavLink } from 'react-router';
import data from '../data/data.json';

const planets = data.map( planet => planet.name );

export const AppNavbar = () => {
  return (
    <nav className='app-navbar'>

      <NavLink
        to='/'
        className='title'
      >
        THE PLANETS
      </NavLink>

      <section className='menu' id='menu'>
        {
          planets.map( planet => (
            <NavLink
              key={planet.toLowerCase()}
              to={planet.toLowerCase()}>
              {planet.toUpperCase()}
            </NavLink>
          ))
        }
        <a
          href="#menu"
          className='burger-icon'
        >
          <img src="/assets/icon-hamburger.svg" alt="Burger Icon" />
        </a>
      </section>
    </nav>
  )
}

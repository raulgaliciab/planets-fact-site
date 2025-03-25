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

        <label
          className='burger-icon'
        >
          <input type="checkbox"/>
        </label>

        <div className='menu-planets'>
          {
            planets.map( planet => (
              <NavLink
                key={planet.toLowerCase()}
                to={planet.toLowerCase()}
              >
                <span></span>
                <p>{planet.toUpperCase()}</p>
                <img src="/assets/icon-chevron.svg" alt="Arrow" />
              </NavLink>
            ))
          }
        </div>
      </section>
    </nav>
  )
}

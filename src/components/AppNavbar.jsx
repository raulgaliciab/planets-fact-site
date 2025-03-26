import { NavLink, useLocation } from 'react-router';
import data from '../data/data.json';
import { useEffect, useRef } from 'react';

const planets = data.map( planet => planet.name );

export const AppNavbar = () => {

  const location = useLocation();
  const checkboxRef = useRef(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }

  }, [location.pathname]);

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
          <input
            type="checkbox"
            ref={checkboxRef}
          />
        </label>

        <div className='menu-planets'>
          {
            planets.map( planet => (
              <NavLink
                key={planet.toLowerCase()}
                to={planet.toLowerCase()}
              >
                <span
                  className={`${planet.toLowerCase()}-span`}
                >
                </span>
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

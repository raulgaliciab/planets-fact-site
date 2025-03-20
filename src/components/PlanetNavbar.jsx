import { NavLink, useParams } from 'react-router';

export const PlanetNavbar = () => {

  const { planetName } = useParams();

  return (
    <nav className='planet-navbar'>
      <NavLink to={`/${planetName}/overview`}>
        OVERVIEW
      </NavLink>

      <NavLink to={`/${planetName}/internal-structure`}>
        STRUCTURE
      </NavLink>

      <NavLink to={`/${planetName}/surface-geology`}>
        SURFACE
      </NavLink>
    </nav>
  )
}

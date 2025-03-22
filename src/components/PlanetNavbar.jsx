import { NavLink, useParams } from 'react-router';

export const PlanetNavbar = () => {

  const { planetName } = useParams();


  return (
    <nav className='planet-navbar'>
      <NavLink
        to={`/${planetName}/overview`}
        style={({ isActive }) => isActive ? { borderBottom: `4px solid var(--${planetName.toLowerCase()})` } : {}}
      >
        OVERVIEW
      </NavLink>

      <NavLink
        to={`/${planetName}/internal-structure`}
        style={({ isActive }) => isActive ? { borderBottom: `4px solid var(--${planetName.toLowerCase()})` } : {}}
      >
        STRUCTURE
      </NavLink>

      <NavLink
        to={`/${planetName}/surface-geology`}
        style={({ isActive }) => isActive ? { borderBottom: `4px solid var(--${planetName.toLowerCase()})` } : {}}
      >
        SURFACE
      </NavLink>
    </nav>
  )
}

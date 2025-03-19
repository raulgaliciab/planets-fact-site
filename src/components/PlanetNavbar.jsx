import { NavLink, useParams } from 'react-router';

export const PlanetNavbar = () => {

  const { planetName } = useParams();
  return (
    <nav>
      <NavLink to={`/${planetName}/overview`}>
        OVERVIEW
      </NavLink>

      <NavLink to={`/${planetName}/internal-structure`}>
        INTERNAL STRUCTURE
      </NavLink>

      <NavLink to={`/${planetName}/surface-geology`}>
        SURFACE GEOLOGY
      </NavLink>
    </nav>
  )
}

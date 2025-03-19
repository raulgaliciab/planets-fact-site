import data from '../data/data.json';

import { Outlet, useParams } from 'react-router';

import { PlanetNavbar } from '../components/PlanetNavbar';

export const PlanetPage = () => {

  const { planetName } = useParams();
  const name = planetName.charAt(0).toUpperCase() + planetName.slice(1);

  const planetData = data.find( item => {

    return name === item.name
  } );


  return (
    <>
      <PlanetNavbar/>
      {planetName}
      <br />
      {planetData.overview.content}
      <br />
      <Outlet/>
    </>
  )
}

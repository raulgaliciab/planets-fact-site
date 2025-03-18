import { useParams } from 'react-router';
import data from '../data/data.json';
import { PlanetRouter } from '../router/PlanetRouter';

export const PlanetPage = () => {

  const { planetName } = useParams();
  const name = planetName.charAt(0).toUpperCase() + planetName.slice(1);

  const planetData = data.find( item => {

    return name === item.name
  } );


  return (
    <>
      {planetName}
      <br />
      {JSON.stringify(planetData, null, 3)}
      <br />
      <PlanetRouter/>
    </>
  )
}

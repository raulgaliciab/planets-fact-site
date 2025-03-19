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
      <Outlet context={planetData}/>

      <section>
        <div>
          <span>ROTATION TIME</span>
          <span>{ planetData.rotation }</span>
        </div>
        <div>
          <span>REVOLUTION TIME</span>
          <span>{ planetData.revolution }</span>
        </div>
        <div>
          <span>RADIUS </span>
          <span>{ planetData.radius }</span>
        </div>
        <div>
          <span>AVERAGE TEMP.</span>
          <span>{ planetData.temperature }</span>
        </div>
      </section>
    </>
  )
}

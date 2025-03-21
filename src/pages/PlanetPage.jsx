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

      <Outlet context={planetData}/>

      <section className='planet-details'>
        <div className='details-card'>
          <span className='details-title'>ROTATION TIME</span>
          <span className='details-data'>{ planetData.rotation }</span>
        </div>
        <div className='details-card'>
          <span className='details-title'>REVOLUTION TIME</span>
          <span className='details-data'>{ planetData.revolution }</span>
        </div>
        <div className='details-card'>
          <span className='details-title'>RADIUS </span>
          <span className='details-data'>{ planetData.radius }</span>
        </div>
        <div className='details-card'>
          <span className='details-title'>AVERAGE TEMP.</span>
          <span className='details-data'>{ planetData.temperature }</span>
        </div>
      </section>
    </>
  )
}

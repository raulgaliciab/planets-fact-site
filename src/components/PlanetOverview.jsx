import { useOutletContext } from 'react-router';
import { PlanetDisplay } from './PlanetDisplay';

export const PlanetOverview = () => {

  const planetData = useOutletContext();

  return (
    <PlanetDisplay
      img={ planetData.images.planet }
      title={ planetData.name }
      content={ planetData.overview.content }
      source={ planetData.overview.source }
    />
  )
}

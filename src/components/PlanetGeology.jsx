import { useOutletContext } from 'react-router';
import { PlanetDisplay } from './PlanetDisplay';

export const PlanetGeology = () => {

  const planetData = useOutletContext();

  return (
    <PlanetDisplay
      img={ planetData.images.geology }
      title={ planetData.name }
      content={ planetData.geology.content }
      source={ planetData.geology.source }
    />
  )
}

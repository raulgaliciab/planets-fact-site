import { useOutletContext } from 'react-router';
import { PlanetDisplay } from './PlanetDisplay';

export const PlanetStructure = () => {

  const planetData = useOutletContext();

  return (
    <PlanetDisplay
      img={ planetData.images.internal }
      title={ planetData.name }
      content={ planetData.structure.content }
      source={ planetData.structure.source }
    />
  )
}

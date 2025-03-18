import { Routes, Route } from 'react-router';
import { PlanetOverview } from '../components/PlanetOverview';
import { PlanetStructure } from '../components/PlanetStructure';
import { PlanetGeology } from '../components/PlanetGeology';

export const PlanetRouter = () => {

  return (
    <Routes>
      <Route path='overview' element={ <PlanetOverview />}/>
      <Route path='internal-structure' element={ <PlanetStructure />}/>
      <Route path='surface-geology' element={ <PlanetGeology />}/>
    </Routes>
  )
}

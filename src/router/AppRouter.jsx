import { Route, Routes } from 'react-router';
import { Home } from '../pages/Home';
import { PlanetPage } from '../pages/PlanetPage';
import { PlanetOverview } from '../components/PlanetOverview';
import { PlanetStructure } from '../components/PlanetStructure';
import { PlanetGeology } from '../components/PlanetGeology';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/:planetName/*' element={ <PlanetPage />} >
        <Route index element={ <PlanetOverview />} />
        <Route path='overview' element={ <PlanetOverview />}/>
        <Route path='internal-structure' element={ <PlanetStructure />}/>
        <Route path='surface-geology' element={ <PlanetGeology />}/>
      </Route>
    </Routes>
  )
}

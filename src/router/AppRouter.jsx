import { Route, Routes } from 'react-router';
import { Home } from '../pages/Home';
import { PlanetPage } from '../pages/PlanetPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/:planetName/*' element={ <PlanetPage />} />
    </Routes>
  )
}

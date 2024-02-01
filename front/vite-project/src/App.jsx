import './App.css'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import Home from './Pages/Home'
import Clientes from './Pages/Clientes'
import Agenda from './Pages/Agenda'
import Audiencias from './Pages/Audiencias'
import Expedientes from './Pages/Expedientes'
import NotFound from './Pages/NotFound'
import DefaultLayout from './Components/DefaultLayout'
import Contacto from './Pages/Contacto'

function App() {

  return (
    <Routes>
      <Route path={routes.home} element={<DefaultLayout><Home/></DefaultLayout>}/>
      <Route path={routes.clientes} element={<DefaultLayout><Clientes/></DefaultLayout>}/>
      <Route path={routes.agenda} element={<DefaultLayout><Agenda/></DefaultLayout>}/>        
      <Route path={routes.audiencias} element={<DefaultLayout><Audiencias/></DefaultLayout>}/>
      <Route path={routes.expedientes} element={<DefaultLayout><Expedientes/></DefaultLayout>}/>
      <Route path={routes.contacto} element={<DefaultLayout><Contacto/></DefaultLayout>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App

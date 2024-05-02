import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Biografia from './pages/biografia'
import Obras from './pages/obras'
import ObrasDetalles from './pages/obras/Details'
import Exhibiciones from './pages/exhibiciones'
import Bibliografia from './pages/bibliografia'
import Cv from './pages/cv'
import Statement from './pages/statement'
import Publicaciones from './pages/publicaciones'
import Contacto from './pages/contacto'
import Error from './pages/error'
import Soon from './Soon'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Soon}
      />
      <Route
        path='/home'
        component={Home}
      />
      <Route
        path='/biografia'
        component={Biografia}
      />
      <Route
        path='/obras'
        component={Obras}
      />
      <Route
        path='/obras/:obra'
        component={ObrasDetalles}
      />
      <Route
        path='/exhibiciones'
        component={Exhibiciones}
      />
      <Route
        path='/bibliografia'
        component={Bibliografia}
      />
      <Route
        path='/cv'
        component={Cv}
      />
      <Route
        path='/statement'
        component={Statement}
      />
      <Route
        path='/libros'
        component={Publicaciones}
      />
      <Route
        path='/contacto'
        component={Contacto}
      />
      <Route component={Error} />
    </Switch>
  )
}

export default App

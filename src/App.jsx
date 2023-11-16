import Container from "./components/Container"
import Provider from "./Context.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Movie from "./components/Movie"
function App () { // Un componente es una funcion sincronica que retorna un elemento HTML
  // SPA single page application

  return (

    <BrowserRouter>{/** Buscador de Rutas // PROVIDER DE REACT_ROUTER_DOM*/}
      <Provider>
        <Routes> {/** Enrutador */}
          <Route path="/" element={<Layout />}>  {/** Rutas, Princial */}
            <Route index element={<Container />} /> {/** Ruta anidada, cuando no contiende rutas debe cerrarse con /> */}
            <Route path="movie" element={<Movie />} />
          </Route>
        </Routes>

      </Provider>
    </BrowserRouter>
  )
}

export default App

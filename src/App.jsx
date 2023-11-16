import Container from "./components/Container"
import Provider from "./Context.jsx"
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"
import Layout from "./components/Layout"
import Movie from "./components/Movie"
function App () { // Un componente es una funcion sincronica que retorna un elemento HTML
  // SPA single page application

  return (
    <Provider>
      <BrowserRouter> {/** Buscador de Rutas */}
        <Routes> {/** Enrutador */}
          <Route path="/" element={<Layout />}>  {/** Rutas, Princial */}
            <Route index element={<Container />} /> {/** Ruta anidada, cuando no contiende rutas debe cerrarse con /> */}
            <Route path=":id" element={<Movie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App

import Container from "./components/Container"
import { useEffect } from "react"
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"
import Layout from "./components/Layout"
import Movie from "./components/Movie"
function App () { // Un componente es una funcion sincronica que retorna un elemento HTML
  // SPA single page application

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Container />} />
          <Route path=":id" element={<Movie />} />
          {/* <Route path="toy" element={<Outlet />}>
            <Route path="hola2" element={<h1>Hola 2</h1>} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

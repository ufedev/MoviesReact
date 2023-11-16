import MovieCard from "./MovieCard.jsx"
import { useApp } from '../Context.jsx'
// useEffect  y useState
// hooks = utilidades creadas de React o pueden ser creadas por nosotros
// Virtual DOM !== Real DOM
// Virtual DOM es una copia completa en memoria del DOM real
// Más Eficiente y rapido modificar el Virtual DOM que el Real DOM pero por contraparte consume mucha memoria




function Container () {

    const { movies, loader, handleClick } = useApp()


    return (
        <>
            <main className="container content" id='mimain'>
                {/* {1 === '1' ? (loader ? <p>Cargando</p> : <p>No cargando</p>) : "no es igual a 1"} */}
                {
                    movies?.map((pelicula) => {
                        return <MovieCard key={`${pelicula.id}${Math.random()}`} pelicula={pelicula} />
                    })
                }

            </main>


            {loader ? <p className='loader'>Cargando...</p> : <button className='btn-seemore' onClick={handleClick}>Ver más</button>}
        </>
    )
}



export default Container

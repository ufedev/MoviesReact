import { createContext, useContext, useEffect, useState } from "react"



const AppContext = createContext()



const Provider = ({ children }) => {

    const [movies, setMovies] = useState([]) // useState retorna un arreglo
    const [loader, setLoader] = useState(false)
    const [page, setPage] = useState(1)



    const getMovies = async () => {
        try {
            setLoader(true)
            // https://api.themoviedb.org/3/movie/popular
            const url = `${import.meta.env.VITE_URL}?language=es-ES&page=${page}` // template string 

            const config = {
                method: "GET", // GET POR DEFECTO  METHODS = GET,POST,PUT,DELETE,PATCH,OPTIONS
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${import.meta.env.VITE_TOKEN}`
                },
                //body:"" // para metodos PUT PATCH POST
            }
            const req = await fetch(url, config)
            if (req.status === 200) {
                const res = await req.json()
                if (movies.length === 0) {
                    setMovies(res.results)
                } else {
                    const nuevoArray = movies.concat(res.results) // forma más legible
                    const nuevoArray2 = [...movies, ...res.results] // forma nueva spread operator
                    setMovies(nuevoArray)
                }

            }


        } catch (err) {
            console.log(err.message)
        } finally {
            setLoader(false)
        }
    }

    const handleClick = (event) => {
        event.preventDefault()
        setPage(page + 1)
    }
    const infiniteScroll = (e) => {
        e.preventDefault()
        console.log((Math.ceil(window.innerHeight + document.documentElement.scrollTop) == document.documentElement.offsetHeight))

        if ((Math.ceil(window.innerHeight + document.documentElement.scrollTop) === (document.documentElement.offsetHeight)) && !loader) {
            // console.log('hoal')
            setPage(page + 1)


        }


    }




    useEffect(() => { // Con boton para ver más

        getMovies()
    }, [page]) // array de dependencias. si esta vacio se ejecuta una vez se monta el componente
    // si tiene dependencias, se va a ejecutar el USEEFFECT cada vez que cambie la/s dependencia/s



    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}


export const useApp = () => {
    return useContext(AppContext)
}

export default Provider




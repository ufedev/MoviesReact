import { useParams } from "react-router-dom"

const Movie = () => {
    const { id } = useParams()

    // console.log(params)
    // const id = 'hola'
    return <h1>pelicula {id}</h1>

}


export default Movie
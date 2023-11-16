import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Movie = () => {

    const [movie, setMovie] = useState({})
    const { id } = useParams()

    // console.log(typeof (1 + 1))

    const getMovie = async () => {

        try {
            const url = `https://api.themoviedb.org/3/find/${id}` // template string
            const config = {
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
                }
            }

            const req = await fetch(url, config)
            const res = await req.json()

            console.log(res)

        } catch (err) {

        }

    }


    useEffect(() => {
        getMovie()
    }, [])//el array es de dependencias

    return <h1>pelicula {id}</h1>

}


export default Movie
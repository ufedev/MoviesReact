import MovieCard from "./MovieCard"
// useEffect  y useState
import { useEffect, useState } from "react"

function Container () {

    const mi_objeto = {
        ungato: 'miau',
        unperro: 'guau',

    }
    const mi_array = [1, 2, 3]

    const { unaballena, unperro, ungato } = mi_objeto
    const [uno, dos, tres, cuatro] = mi_array

    useEffect(() => {


        console.log(unaballena)
        console.log(uno)
        console.log(cuatro)
    }, [])

    return (
        <main className="container content">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </main>
    )
}



export default Container
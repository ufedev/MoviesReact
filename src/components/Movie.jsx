import { useApp } from "../Context"

const Movie = () => {
    const { movie } = useApp()
    const { title, backdrop_path, overview, vote_average, vote_count, release_date, poster_path } = movie
    const stars = Math.round(vote_average / 2)
    console.log(movie)

    return (
        <main className='container onemovie'>
            <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} className="onemovie-desktop" />
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="onemovie-mobile" />

            <div>
                <h1>{title}</h1>
                <p>{overview}</p>
                <span>⭐{stars}/5 con {vote_count} votaciones</span>
            </div>
        </main>
    )

}


export default Movie
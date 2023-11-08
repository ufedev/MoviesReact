import portada from "./../assets/portada.jpg"

function MovieCard () {

    return (
        <article className='moviecard'>
            <h3>Titulo Pelicula</h3>
            <div className="moviecard-image">
                <img src={portada} alt='Portada de Pelicula' />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum repudiandae eius, illo possimus voluptatum mollitia voluptatibus omnis sit a ut dicta laborum veniam quasi? Quis quaerat sed vero dolore corporis!</p>
        </article>
    )
}


export default MovieCard
import React from 'react';

const randomQuote = (movie) => {
  const randomIndex = Math.floor(Math.random() * movie.count);
  return {
      quote: movie.results[randomIndex].opening_crawl,
      title: movie.results[randomIndex].title,
      year: movie.results[randomIndex].release_date
   }
}

const Film = ({ movie }) => {
  if (movie) {
  const randomMovie = randomQuote(movie)
    return(
      <div className='random-film'>
        <p>{ randomMovie.quote }</p>
        <p>{ randomMovie.title }</p>
        <p>{ randomMovie.year }</p>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Film;

import React from 'react';

const randomQuote = (movie) => {
  console.log(movie.results);
  // movie.results
  const randomIndex = Math.floor(Math.random() * movie.count);
  // let quote = movie.results[randomIndex].opening_crawl;
  // console.log(quote);

}




const Film = ({movie}) => {
  console.log(movie);
  return(
    <div>
      { randomQuote(movie) }
    </div>
  )
}

export default Film;

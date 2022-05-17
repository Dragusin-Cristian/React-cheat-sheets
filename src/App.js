import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
//
import { useState, useEffect, useCallback } from 'react';
import AddMovie from "./components/AddMovie";

function App() {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // using useCallback instead of empty array in the useEffect is 
  // considered a good practice:

  // WITHOUT useCallback | may be wrong: 
  //
  //  useEffect(()=>{
  //    getMovies();
  //  }, []); // keep dependecies array empty, and don't use useCallback

  // WITH useCallback:

  const getMovies = useCallback(async () => {
    // GET REQUEST (async function):
    setIsLoading(true);
    try {
      // get the response
      const response = await fetch(`${process.env.REACT_APP_FIREBASE_REALTIME_DB_LINK}/movies.json`);
      // if response !ok, throw an Error, that will be handled later
      if (!response.ok) throw new Error("Something went wrong!");
      // if response is ok, get the data 
      const data = await response.json();
      // initialize loaded mmovies array
      const loadedMovies = [];
      // loop through data object and format the data to loadedMovies:
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText
        });

        console.log(loadedMovies);
      }
      // set the movies state:
      setMovies(loadedMovies);
    } catch (err) {
      // catch the error threw before
      setError(true);
    } finally {
      // in the end, set isLoading state to false
      setIsLoading(false);
    }
    // console.log(data.results);
  }, []);

  // if we were not be using useCallback, then HERE WOULD BE AN INFINITE LOOP
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  // POST REQUEST:
  const addMovieHandler = async (movie) => {
    // mostly same comments as for GET request
    try {
      const response = await fetch(`${process.env.REACT_APP_FIREBASE_REALTIME_DB_LINK}/movies.json`, {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "contentType": "application/json"
        }
      });

      if (!response.ok) throw new Error("Could not post");

      const data = await response.json();
      console.log(data);

      // also update the local moviesState, not make a new get request
      setMovies(oldMovies => {
        return oldMovies.concat({
          id: data.name,
          title: movie.title,
          releaseDate: movie.releaseDate,
          openingText: movie.openingText
        })
      })
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
  }

  // DOM content handling made outside return function:
  //
  // let content = <p>We found no movies!</p>
  // if (movies.length > 0) content = <MoviesList movies={movies} />;
  // else if (error) content = <p>Something went wrong!</p>;
  // else if (isLoading) content = <p>Loading...</p>
  // else if (movies.length === 0) content = <p>We found no movies!</p>;

  return (
    <React.Fragment>
      <section>
        <button onClick={getMovies}>Fetch Movies</button>
      </section>
      <section>
        {/* DOM content handling made inside return function: */}
        {(isLoading && !error) ? <p>Loading</p> : <MoviesList movies={movies} />}
        {(movies.length === 0 && !isLoading && !error) && <p>We found no movies.</p>}
        {error && <p>Something went wrong!</p>}
        {/* {content} */}
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
    </React.Fragment>
  );
}

export default App;

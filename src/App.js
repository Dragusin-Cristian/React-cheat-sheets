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

  // without useCallback | may be wrong:
  //
  //  useEffect(()=>{
  //    getMovies();
  //  }, []); // keep dependecies array empty, and don't use useCallback

  const getMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://udemy-course-791bc-default-rtdb.europe-west1.firebasedatabase.app/movies.json");

      if (!response.ok) throw new Error("Something went wrong!");

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText
        });
      }

      setMovies(loadedMovies);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
    // console.log(data.results);
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);
  let content = <p>We found no movies!</p>


  const addMovieHandler = async (movie) => {
    const response = await fetch("https://udemy-course-791bc-default-rtdb.europe-west1.firebasedatabase.app/movies.json", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "contentType": "application/json"
      }
    });

    if (!response.ok) throw new Error("Could not post");

    const data = await response.json();
    console.log(data);
  }

  if (movies.length > 0) content = <MoviesList movies={movies} />;
  else if (error) content = <p>Something went wrong!</p>;
  else if (isLoading) content = <p>Loading...</p>
  else if (movies.length === 0) content = <p>We found no movies!</p>;

  return (
    <React.Fragment>
      <section>
        <button onClick={getMovies}>Fetch Movies</button>
      </section>
      <section>
        {/* {(isLoading && !error) ? <p>Loading</p> : <MoviesList movies={movies} />}
        {(movies.length === 0 && !isLoading && !error) && <p>We found no movies.</p>}
        {error && <p>Something went wrong!</p>} */}
        {content}
        <AddMovie onAddMovie={addMovieHandler} />
      </section>


    </React.Fragment>
  );
}

export default App;

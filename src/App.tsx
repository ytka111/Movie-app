import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { MovieList } from "./components/MovieList";
import { MovieListHeading } from "./components/MovieListHeading";
import { SearchBox } from "./components/SearchBox";

const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  flex-wrap: nowrap;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &:-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: 0 0 1px 1px #111, inset 0 0 4px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #575756;
    box-shadow: inset 0 0 1px 1px #646464;
  }
  &::-webkit-scrollbar-thumb:hover {
    border-radius: 10px;
    background-color: #717171;
    box-shadow: inset 0 0 1px 1px #646464;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("dumb");
  const [favourites, setFavourites] = useState([]);
  const getMovieRequest = async (searchValue: any) => {
    const url = `https://www.omdbapi.com/?apikey=33270795&s=${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    if (localStorage.getItem("movie-favourites")) {
      const movieFavourites: any = localStorage.getItem("movie-favourites");
      setFavourites(JSON.parse(movieFavourites));
    }
  }, []);

  const saveToLocalStorage = (items: any) => {
    localStorage.setItem("movie-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie: any) => {
    let newFavouriteList: any = [...favourites];
    if (!newFavouriteList.includes(movie)) {
      newFavouriteList = [...favourites, movie];
    }
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
    console.log(favourites);
  };

  const removeFavouriteMovie = (movie: any) => {
    const newFavouriteList = favourites.filter(
      (favourite: any) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <>
      <Heading>
        <MovieListHeading heading={"Movies"} />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </Heading>
      <Container>
        <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} />
      </Container>
      <MovieListHeading heading={`Favourites`} favourites={favourites} />
      <Container>
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
        />
      </Container>
    </>
  );
};

export default App;

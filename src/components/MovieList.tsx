import React from "react";
import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  height: 475px;
  gap: 35px;
  margin: 1em;
`;

const Image = styled.img`
  height: 100%;
  position: relative;
`;

const Container = styled.div`
  position: relative;
  transition: transform 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    &:after {
      opacity: 1;
    }
  }
  &:after {
    content: "Favourite ❤";
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    transition: 0.5 ease;
    opacity: 0;
    bottom: 0;
    font-size: 20px;
    padding: 20px;
    text-align: center;
  }
`;

export const MovieList = (props: any) => {
  return (
    <List>
      {props.movies.map((movie: any, index: number) => (
        <Container onClick={() => props.handleFavouritesClick(movie)}>
          <Image
            key={movie.imdbID}
            src={movie.Poster}
            alt={`${movie.Title} poster`}
          />
        </Container>
      ))}
    </List>
  );
};

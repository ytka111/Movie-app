import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  color: white;
  margin: 5px;
`;

export const MovieListHeading = (props: any) => {
  if (props.heading === "Favourites") {
    return (
      <Heading>
        {props.heading}: {props.favourites.length}. Status:{" "}
        {props.favourites.length < 3
          ? "newbie"
          : props.favourites.length < 5
          ? "meh"
          : props.favourites.length < 8
          ? "amazing."
          : "That's some serious shit!"}
      </Heading>
    );
  } else {
    return <Heading>{props.heading}</Heading>;
  }
};

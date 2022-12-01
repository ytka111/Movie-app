import React from "react";
import styled from "styled-components";

const Search = styled.input`
  display: flex;
  margin: 2rem 1rem 2rem 0;
  width: 450px;
  padding: 12px 24px;
  background-color: transparent;
  transition: transform 250ms ease-in-out;
  font-size: 14px;
  line-height: 18px;
  color: #575756;
  border-radius: 50px;
  border: 1px solid #575756;
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  &::placeholder {
    color: color(#575756 a(0.8));
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  &:hover,
  &:focus {
    padding: 12px 0;
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #575756;
    border-radius: 0;
  }
`;

export const SearchBox = (props: any) => {
  return (
    <Search
      placeholder="Search"
      value={props.value}
      onChange={(event) => props.setSearchValue(event?.target.value)}
    />
  );
};

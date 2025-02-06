// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ apiPath, title }) => {
  // const arr = [1, 2, 3, 4, 5];

  const { data: movies } = useFetch(apiPath);
  // useEffect(() => {
  //   document.title = `${title}/movie-mate`;
  // }, [title]);
  useTitle(`${title}`);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie, idx) => (
            <Card key={idx} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

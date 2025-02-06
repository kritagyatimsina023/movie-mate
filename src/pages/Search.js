// import React, { useEffect } from "react";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  useTitle(`search result for ${queryTerm}`);

  return (
    <main>
      <section>
        {movies.length > 0 ? (
          <p className="dark:text-white text-3xl mx-5 mt-3">
            Result for "{queryTerm}"
          </p>
        ) : (
          <p className="dark:text-white text-3xl mx-5 mt-3">
            No movies found for "{queryTerm}"
          </p>
        )}
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap">
          {movies.map((movie, idx) => (
            <Card key={idx} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

import React, { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const final = await response.json();
        setData(final.results);
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    }
    if (url) {
      fetchMovies();
    }
  }, [url]);

  return { data };
};

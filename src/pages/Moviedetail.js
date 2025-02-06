import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../assets/error.jpeg";
import { useTitle } from "../hooks/useTitle";

export const Moviedetail = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const img = data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
    : Error;
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        ` https://api.themoviedb.org/3/movie/${params.id}?api_key=d917414175b743339a74bdcc564ecfff`
      );
      const json = await response.json();
      setData(json);
      // console.log(json);
    };
    fetchMovies();
  }, [params.id]);
  // useEffect(() => {
  //   // console.log(data.title);
  //   document.title = `${data.title} / moviemate`;
  // }, [data]);
  useTitle(`${data.title}`);

  return (
    <main>
      {data.vote_count !== 0 && data.vote_count !== null ? (
        <section className="flex justify-between other_1:flex-wrap other_1:justify-evenly  gap-10  py-5">
          <div className="max-w-sm h-[440px]">
            <img className="rounded h-full" src={img} alt="Pic" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="dark:text-white other_1:text-center font-bold text-3xl">
              {data.title}
            </h1>
            <p className="dark:text-white other_1:text-center my-8 px-4">
              {data.overview}
            </p>
            <div className="flex other_1:flex-wrap  gap-5">
              {data.genres?.map((val, idx) => (
                <span
                  key={idx}
                  className="p-3 rounded dark:text-white border border-gray-500 "
                >
                  {val.name}
                </span>
              ))}
            </div>
            <div className="my-4 dark:text-white flex flex-col gap-3 ">
              <p>
                ⭐️ {data.vote_average} · {data.vote_count} reviews
              </p>
              <p>
                <span className="font-bold">Runtime:</span> {""}
                {data.runtime} min.
              </p>
              <p>
                <span className="font-bold">Budget:</span> {""}
                {data.budget}
              </p>
              <p>
                <span className="font-bold">Revenue:</span> {""}
                {data.revenue}
              </p>
              <p>
                <span className="font-bold">Release Date:</span> {""}
                {data.release_date}
              </p>
              <p>
                <a
                  href={`https://www.imdb.com/title/${data.imdb_id}/`}
                  className="font-bold"
                  target="_blank"
                  rel="no"
                >
                  IMDB Code:
                </a>{" "}
                {""}
                {data.imdb_id}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <p className="text-3xl dark:text-white text-center my-10 px-3">
          Details not found
        </p>
      )}
    </main>
  );
};

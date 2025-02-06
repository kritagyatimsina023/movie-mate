import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export const Card = ({ movie }) => {
  const { id, original_title, title, backdrop_path, overview } = movie;
  const img = backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    : Logo;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm m-4 dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={`${img}`} alt="No img found" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};

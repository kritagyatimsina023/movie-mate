// import React, { useEffect } from "react";
import Error from "../assets/error.jpeg";
import { useNavigate } from "react-router-dom";

import { useTitle } from "../hooks/useTitle";

export const Pagenotfound = ({ title }) => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   document.title = "Page not found ";
  // }, [title]);
  useTitle(`${title}`);
  return (
    <main>
      <section>
        <div className="flex flex-col items-center dark:text-white my-8">
          <p className="my-8 text-4xl font-bold ">404 Not found,Oops!</p>
          <div className="max-w-lg">
            <img className="rounded" src={Error} alt="error" />
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("/")}
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Back to Home page
            </span>
          </button>
        </div>
      </section>
    </main>
  );
};

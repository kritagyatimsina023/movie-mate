import React from "react";

export const useTitle = (title) => {
  document.title = `${title} / movie-mate`;
  return null;
};

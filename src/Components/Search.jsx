import React from "react";
import StarRating from "./StarRating";

const Search = ({ handleSearchText, rating, handleRating, searchText }) => {
  console.log(handleSearchText, rating, handleRating, searchText);
  return (
    <div>
      <form>
        <input
          type="text"
          value={searchText}
          onChange={(e) => handleSearchText(e.target.value)}
        />
        <StarRating rating={rating} handleRating={handleRating} />
      </form>
    </div>
  );
};

export default Search;

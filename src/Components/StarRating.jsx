import React from "react";

const StarRating = ({ rating, handleRating }) => {
  const stars = (rating) => {
    var tab = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        tab.push(
          <span
            style={{ color: "gold", fontSize: "30px", cursor: "pointer" }}
            onClick={() => handleRating(i)}
          >
            ★
          </span>
        );
      } else {
        tab.push(
          <span
            style={{ color: "black", fontSize: "30px", cursor: "pointer" }}
            onClick={() => handleRating(i)}
          >
            ★
          </span>
        );
      }
    }
    return tab;
  };
  return <div>{React.Children.toArray(stars(rating))}</div>;
};
StarRating.defaultProps = {
  handleRating: () => {},
};

export default StarRating;

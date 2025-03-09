import { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0); // Stores the selected rating
  const [hover, setHover] = useState(0); // Stores the hovered star index

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <span
            key={index}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            style={{
              cursor: "pointer",
              fontSize: "30px",
              color: starValue <= (hover || rating) ? "gold" : "gray",
            }}
          >
            &#9733;
          </span>
        );
      })}
      <p>
        Selected Rating: {rating} / {totalStars}
      </p>
    </div>
  );
};

export default StarRating;

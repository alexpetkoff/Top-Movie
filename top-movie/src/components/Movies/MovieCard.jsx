import { useState } from "react";
import "./MovieCard.css";

function MovieCard({ title, image, categories }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked((prevIsClicked) => !prevIsClicked);
    };

    return (
        <div>
            <div className="card-component">
                <div className="image-container">
                    <img src={image} alt="movie image" />
                </div>
                <div className="categories-container">
                    {categories.map((c) => (
                        <span key={c._id} className="category">
                            {c.name}
                        </span>
                    ))}
                </div>
                <div className="title">
                    <p className="movie-title">{title}</p>
                </div>
                <button onClick={handleClick} className="more-btn">
                    {isClicked ? "View less" : "View more"}
                </button>
            </div>
            {isClicked && <div className="text">{title}</div>}
        </div>
    );
}

export default MovieCard;

import { useState } from "react";
import "./MovieCard.css";

function MovieCard({ title, image, categories, isClicked, onClick }) {
    return (
        <>
            <div
                className={
                    isClicked ? "card-component active" : "card-component"
                }
            >
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
                <button
                    onClick={onClick}
                    className={isClicked ? "more-btn clicked" : "more-btn"}
                >
                    {isClicked ? "View Less" : "View More"}
                </button>
            </div>
            {isClicked && <div className="movie-desc">{title}</div>}
        </>
    );
}

export default MovieCard;

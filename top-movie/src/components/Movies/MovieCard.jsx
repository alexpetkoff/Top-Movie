import { useState } from "react";
import "./MovieCard.css";
import icon from "../../assets/no-icon.webp";

function MovieCard({
    title,
    image,
    categories,
    overview,
    crew,
    popularity,
    cast,
    isClicked,
    onClick,
}) {
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
            {isClicked && (
                <div className="movie-desc">
                    <div className="movie-overview">
                        <div className="overview-title">Overview</div>
                        <div className="overview-text">{overview}</div>
                    </div>
                    <div className="popularity">
                        <div className="popularity-title">Popularity</div>
                        <div className="popularity-score">{popularity}</div>
                    </div>
                    <div className="crew">
                        <div className="crew-title">Crew Members</div>
                        <div className="crew-info">
                            {crew.map((item, i) => (
                                <div key={i} className="crew-members">
                                    <img
                                        className="photo"
                                        src={item.image ? item.image : icon}
                                        alt="photo"
                                    />
                                    <div className="crew-details">
                                        <div className="name">{item.name}</div>
                                        <div className="job">{item.job}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="crew">
                        <div className="crew-title">Cast Members</div>
                        <div className="crew-info">
                            {cast.map((item, i) => (
                                <div key={i} className="crew-members">
                                    <img
                                        className="photo"
                                        src={item.image ? item.image : icon}
                                        alt="photo"
                                    />
                                    <div className="crew-details">
                                        <div className="name">{item.name}</div>
                                        <div className="job">
                                            {item.character}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MovieCard;
